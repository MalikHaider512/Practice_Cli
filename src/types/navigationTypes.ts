import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: string; title?: string };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
