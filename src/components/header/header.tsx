import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.parentView}>
      <TouchableOpacity onPress={handleBack}>
        <Feather name="chevron-left" size={25} />
      </TouchableOpacity>

      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}
