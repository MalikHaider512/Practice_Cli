import type { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  VoiceRecording: undefined;
  Inputs: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
