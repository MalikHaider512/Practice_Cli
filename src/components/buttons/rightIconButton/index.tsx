import React from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";

interface RightIconButtonProps extends TouchableOpacityProps {
  title?: string;
  textStyles?: TextProps;
  btnStyles?: ViewProps;
}

export default function RightIconButton({
  title,
  textStyles,
  btnStyles,
  ...rest
}: RightIconButtonProps) {
  return (
    <TouchableOpacity style={[styles.buttonView, btnStyles]} {...rest}>
      <Text style={[styles.textStyle, textStyles]}> {title}</Text>
      <AntDesign name="right" size={25} />
    </TouchableOpacity>
  );
}
