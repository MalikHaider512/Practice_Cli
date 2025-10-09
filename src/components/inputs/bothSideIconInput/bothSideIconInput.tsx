import React, { ReactNode, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Feather from "react-native-vector-icons/Feather";

interface BothSideIconInputProps extends TextInputProps {
  label?: string;
  icon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
  parentView?: ViewStyle;
  inputView?: ViewStyle;
  inputStyle?: TextStyle;
  isSecured?: boolean;
}

export default function BothSideIconInput({
  label,
  icon,
  leftIcon,
  rightIcon,
  error,
  parentView,
  inputView,
  inputStyle,
  isSecured = false,
  ...rest
}: BothSideIconInputProps) {
  const [secure, setSecure] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleSecure = () => {
    if (isSecured) {
      setSecure(!secure);
    }
  };
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
        {leftIcon}
        <TextInput
          style={[styles.inputStyles, inputStyle]}
          {...rest}
          secureTextEntry={secure}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isSecured ? (
          <TouchableOpacity onPress={handleSecure}>
            <Feather name={secure ? "eye-off" : "eye"} size={18} />
          </TouchableOpacity>
        ) : (
          rightIcon
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
