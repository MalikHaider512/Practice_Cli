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

interface LeftIconButtonProps extends TouchableOpacityProps {
  title?: string;
  textStyles?: TextProps;
  btnStyles?: ViewProps;
}

export default function LeftIconButton({
  title,
  textStyles,
  btnStyles,
  ...rest
}: LeftIconButtonProps) {
  return (
    <TouchableOpacity style={[styles.buttonView, btnStyles]} {...rest}>
      <AntDesign name="upload" size={25} />
      <Text style={[styles.textStyle, textStyles]}> {title}</Text>
    </TouchableOpacity>
  );
}
