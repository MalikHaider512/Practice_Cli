import type { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Buttons: undefined;
  Inputs: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
