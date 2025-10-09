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

interface ScureInputProps extends TextInputProps {
  label?: string;
  icon?: ReactNode;
  error?: string;
  parentView?: ViewStyle;
  inputView?: ViewStyle;
  inputStyle?: TextStyle;
}

export default function SecureInput({
  label,
  icon,
  error,
  parentView,
  inputView,
  inputStyle,
  ...rest
}: ScureInputProps) {
  const [secure, setSecure] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleSecure = () => {
    setSecure(!secure);
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
        <TextInput
          style={[styles.inputStyles, inputStyle]}
          {...rest}
          secureTextEntry={secure}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity onPress={handleSecure}>
          <Feather name={secure ? "eye-off" : "eye"} size={18} />
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
