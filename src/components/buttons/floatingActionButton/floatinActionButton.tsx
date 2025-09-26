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

interface FloatinActionButtonProps extends TouchableOpacityProps {
  btnStyles?: ViewProps;
}

export default function FloatingActionButton({
  btnStyles,
  ...rest
}: FloatinActionButtonProps) {
  return (
    <TouchableOpacity style={[styles.buttonView, btnStyles]} {...rest}>
      <AntDesign name="plus" size={25} />
    </TouchableOpacity>
  );
}
