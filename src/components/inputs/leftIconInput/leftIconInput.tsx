import React, { ReactNode, useState } from "react";
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

interface LeftIconInputProps extends TextInputProps {
  label?: string;
  icon?: ReactNode;
  error?: string;
  parentView?: ViewStyle;
  inputView?: ViewStyle;
  inputStyle?: TextStyle;
}

export default function LeftIconInput({
  label,
  icon,
  error,
  parentView,
  inputView,
  inputStyle,
  ...rest
}: LeftIconInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.parentView, parentView]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputView,
          inputView,
          isFocused && styles.focusedInput,
          error && styles.errorBorder,
        ]}
      >
        {icon}
        <TextInput
          style={[styles.inputStyles, inputStyle]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
