import React from "react";
import {
  StyleProp,
  StyleSheetProperties,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";

interface RightIconInputProps extends TextInputProps {
  viewStyles?: StyleProp<ViewStyle>; // ✅ Correct type for View styles
  inputStyles?: StyleProp<TextStyle>;
}

export default function RightIconInput({
  viewStyles,
  inputStyles,
  ...rest
}: RightIconInputProps) {
  return (
    <View style={[styles.viewStyles, viewStyles]}>
      <TextInput style={[styles.inputStyle, inputStyles]} {...rest} />
      <Feather name="user" size={20} />
    </View>
  );
}
