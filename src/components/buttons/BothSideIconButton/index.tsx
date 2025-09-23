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

interface BothSideIconButtonProps extends TouchableOpacityProps {
  title?: string;
  textStyles?: TextProps;
  btnStyles?: ViewProps;
}

export default function BothSideIconButton({
  title,
  textStyles,
  btnStyles,
  ...rest
}: BothSideIconButtonProps) {
  return (
    <TouchableOpacity style={[styles.buttonView, btnStyles]} {...rest}>
      <AntDesign name="upload" size={25} />
      <Text style={[styles.textStyle, textStyles]}> {title}</Text>

      <AntDesign name="right" size={25} />
    </TouchableOpacity>
  );
}
