import React from "react";
import { Text, View } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import {
  BothSideIconButton,
  GradientButton,
  Header,
  LeftIconButton,
  RightIconButton,
  SimpleButton,
} from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "../../utils/CommonStyles";

export default function Buttons() {
  const handleSimpleButtonPress = () => {
    console.log("Simple Button Pressed....");
  };

  const handleGradientButtonPress = () => {
    console.log("Gradient Button Pressed....");
  };

  const handleLeftIconButtonPress = () => {
    console.log("Left Icon Button Pressed....");
  };

  const handleRightIconButtonPress = () => {
    console.log("Right Icon Button Pressed....");
  };

  const handleBothSideIconButtonPress = () => {
    console.log("Right Icon Button Pressed....");
  };
  return (
    <SafeAreaView style={commonStyles.parentView}>
      <Header title={"Buttons"} />

      <SimpleButton title="Simple Button" onPress={handleSimpleButtonPress} />

      <GradientButton
        title="Gradient Button"
        onPress={handleGradientButtonPress}
      />

      <LeftIconButton
        title="Left Icon Button"
        onPress={handleLeftIconButtonPress}
      />

      <RightIconButton
        title="Right Icon Button"
        onPress={handleRightIconButtonPress}
      />

      <BothSideIconButton
        title="Both Side Icon Button"
        onPress={handleBothSideIconButtonPress}
      />
    </SafeAreaView>
  );
}
