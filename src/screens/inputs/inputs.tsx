import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Header,
  LeftIconInput,
  RightIconInput,
  SimpleButton,
  SimpleInput,
} from "../../components";

export default function Inputs() {
  return (
    <SafeAreaView>
      <Header title={"Inputs"} />
      <SimpleInput placeholder="Enter Text" />

      <LeftIconInput placeholder="Enter Username" />

      <RightIconInput />
    </SafeAreaView>
  );
}
