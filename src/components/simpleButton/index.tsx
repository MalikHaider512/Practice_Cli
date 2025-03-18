import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import styles from './styles';

interface SimpleButtonProps extends TouchableOpacityProps {
  title?: string;
  buttonStyle?: ViewStyle;
  textStyles?: TextStyle;
}

export default function SimpleButton({
  title,
  buttonStyle,
  textStyles,
  ...rest
}: SimpleButtonProps) {
  return (
    <TouchableOpacity style={styles.btnTouch} {...rest}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
