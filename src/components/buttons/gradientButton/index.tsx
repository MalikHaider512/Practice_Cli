import React from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import Colors from "../../../utils/AppColors";

interface GradientButtonProps extends TouchableOpacityProps {
  title?: string;
  textStyles?: TextProps;
  btnStyles?: ViewProps;
}

export default function GradientButton({
  title,
  textStyles,
  btnStyles,
  ...rest
}: GradientButtonProps) {
  return (
    <TouchableOpacity style={[styles.buttonView, btnStyles]} {...rest}>
      <LinearGradient
        colors={[Colors.nobel, Colors.alto, Colors.grayMedium]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientView}
      >
        <Text style={[styles.textStyle, textStyles]}> {title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
