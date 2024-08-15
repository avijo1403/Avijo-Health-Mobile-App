import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { colors, wp } from "../Theme/GlobalTheme";

export default function Collapsible2(props) {
  const { heading, text, content, onSelect } = props;
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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>{heading}</Text>
      <TouchableOpacity onPress={toggleCollapsed} style={styles.ButtonContainer}>
        <Text style={styles.dropDownText}>{selected !== '' ? selected : text}</Text>
        {isCollapsed ? (
          <Image style={styles.arrow} source={require('../assets/images/down-arrow.png')} />
        ) : (
          <Image style={styles.arrow} source={require('../assets/images/top-arrow.png')} />
        )}
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          {content?.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelect(item)} style={styles.itemContainer}>
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
    fontSize: 18,
    fontFamily: 'Gilroy-Medium',
    padding: '1%',
    paddingLeft: 0,
    color: colors.black,
    marginBottom: 5,
    marginTop: '5%',
  },
  arrow: {
    height: 20,
    width: 20,
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
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
    fontFamily: 'Gilroy-Medium',
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
  }
});
