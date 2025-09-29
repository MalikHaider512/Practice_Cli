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
import styles from "./styles";
import Feather from "react-native-vector-icons/Feather";

interface LeftIconInputProps extends TextInputProps {
  viewStyles?: StyleProp<ViewStyle>; // ✅ Correct type for View styles
  inputStyles?: StyleProp<TextStyle>;
}

export default function LeftIconInput({
  viewStyles,
  inputStyles,
  ...rest
}: LeftIconInputProps) {
  return (
    <View style={[styles.viewStyles, viewStyles]}>
      <Feather name="user" size={20} />
      <TextInput style={[styles.inputStyle, inputStyles]} {...rest} />
    </View>
  );
}
