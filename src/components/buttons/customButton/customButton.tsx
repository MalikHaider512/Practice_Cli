import React, { ReactNode } from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import styles from "./styles";

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  textStyles?: TextProps;
  btnStyles?: ViewProps;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function CustomButton({
  title,
  textStyles,
  btnStyles,
  leftIcon,
  rightIcon,
  ...rest
}: CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.buttonView, btnStyles]} {...rest}>
      {leftIcon}
      <Text style={[styles.textStyle, textStyles]}> {title}</Text>

      {rightIcon}
    </TouchableOpacity>
  );
}
