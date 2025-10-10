import type { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  VoiceRecording: undefined;
  Inputs: undefined;
  Modals: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
