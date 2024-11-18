import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { colors, wp } from "../Theme/GlobalTheme";

export default function Collapsible3(props) {
  const { heading, text, content, onSelect, navigation, path } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState('');

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSelect = (item) => {
    setSelected(item);
    setIsCollapsed(true);
    if (onSelect) {
      onSelect(item);
    }
    if(navigation){
      navigation.navigate(path);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>{heading}</Text>
      <TouchableOpacity onPress={toggleCollapsed} style={styles.ButtonContainer}>
        <Text style={styles.dropDownText}>{selected !== '' ? selected : text}</Text>
        {isCollapsed ? (
          props.showRight?<Image style={styles.arrow} source={require('../assets/images/right2.png')} />:<Image style={styles.arrow} source={require('../assets/images/down.png')} />
        ) : (
          props.showRight?<Image style={styles.arrow} source={require('../assets/images/right2.png')} />:<Image style={styles.arrow} source={require('../assets/images/down.png')} />
        )}
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          {content?.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => {handleSelect(item)}} style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 0, // Added padding for better layout visibility
  },
  textHeading: {
    width: '90%',
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    padding: '1%',
    paddingLeft: 0,
    color: colors.lightGreen,
    marginBottom: 5,
    marginTop: '3%',
  },
  arrow: {
    height: 10,
    width: 12,
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRadius: 5,
    height: 48,
    padding: 10,
    backgroundColor: colors.white,
    borderColor: colors.grey,
  },
  content: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10, // Added margin for better separation
    backgroundColor: colors.white,
    elevation: 5,
    width:wp(85),
  },
  dropDownText: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    width: '90%',
    paddingLeft: '3%',
    color: colors.darkGrey,
  },
  itemContainer: {
    width: '100%',
  },
  itemText: {
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
    color: colors.darkGrey,
    marginBottom: 5,
    padding: 5,
    width: '100%',
  },
  arrow: {
    height: 12,
    width: 12,
  }
});
