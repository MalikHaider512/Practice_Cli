import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components";

export default function Inputs() {
  return (
    <SafeAreaView>
      <Header title={"Inputs"} />
      <Text>Inputs</Text>
    </SafeAreaView>
  );
}
