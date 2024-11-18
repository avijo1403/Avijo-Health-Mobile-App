import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { colors, wp } from "../Theme/GlobalTheme";

export default function Collapsible5(props) {
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
      <TouchableOpacity onPress={toggleCollapsed} style={styles.ButtonContainer}>
        <Text style={styles.dropDownText}>{selected !== '' ? selected : text}</Text>
        {isCollapsed ? (
          <Image style={styles.arrow} source={require('../assets/images/greenDown.png')} />
        ) : (
          <Image style={styles.arrow} source={require('../assets/images/greenDown.png')} />
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
    width: '90%',
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
    marginTop: '0%',
  },
  arrow: {
    height: 16,
    width: 16,
  },
  ButtonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    padding: 10,
    backgroundColor: colors.white,
    borderColor: colors.lightGreen,
  },
  content: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10, // Added margin for better separation
    backgroundColor: colors.white,
    elevation: 5,
    width: wp(28),
  },
  dropDownText: {
    fontSize: 10,
    fontFamily: 'Gilroy-SemiBold',
    width: '90%',
    paddingLeft: '3%',
    color: colors.lightGreen,
    lineHeight: 10
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
