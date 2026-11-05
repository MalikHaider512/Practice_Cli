import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  MLKitMainMenu: undefined;
  FaceDetection: undefined;
  ImageLabelling: undefined;
  FoodDetection: undefined;
  TextRecognition: undefined;
  View: undefined;
  Text: undefined;
  Image: undefined;
  ImageBackground: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
