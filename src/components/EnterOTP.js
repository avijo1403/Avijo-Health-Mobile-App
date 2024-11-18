import React from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { colors, hp, wp } from "../Theme/GlobalTheme";

const CELL_COUNT = 6;

const EnterOTP = ({ value, setValue }) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  return (
    <View style={styles.MainContainer}>
      <View style={styles.BoxContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={(text) => {
            setValue(text);
            if (text.length === CELL_COUNT) {
              Keyboard.dismiss();
            }
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

export default EnterOTP;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: colors.white,
    height: hp(6),
    width:'90%',
  },
  codeFieldRoot: {},
  cell: {
    width: '48%',
    height: '100%',
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    textAlign: "center",
    color: colors.black,
    marginHorizontal: "5%",
  },
  focusCell: {
    borderColor: colors.white,
  },
  BoxContainer: {
    width: "30%",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});
