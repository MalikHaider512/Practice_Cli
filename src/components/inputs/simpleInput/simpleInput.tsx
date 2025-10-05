import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import styles from "./styles";

interface SimpleInputProps extends TextInputProps {
  label?: string;

  error?: string;
  parentView?: ViewStyle;
  inputStyle?: TextStyle;
}

export default function SimpleInput({
  label,

  error,
  parentView,
  inputStyle,
  ...rest
}: SimpleInputProps) {
  return (
    <View style={[styles.parentView, parentView]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.inputStyles, inputStyle, error && styles.errorBorder]}
        {...rest}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
