import React, { useEffect } from "react";

import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../utils/types";

import {
  ButtonsScreen,
  HomeScreen,
  InputsScreen,
  VoiceRecordingScreen,
} from "../screens";

import ScreensName from "./routes";

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name={ScreensName.HOME} component={HomeScreen} />

        <Stack.Screen name={ScreensName.BUTTONS} component={ButtonsScreen} />

        <Stack.Screen
          name={ScreensName.VOICERECORDING}
          component={VoiceRecordingScreen}
        />

        <Stack.Screen name={ScreensName.INPUTS} component={InputsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
