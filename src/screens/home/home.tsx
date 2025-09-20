import React from "react";
import { Button, Text, View } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import styles from "../../utils/CommonStyles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/types";
import ScreensName from "../../routes/routes";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const handleGoToButton = () => {
    navigation.navigate(ScreensName.BUTTONS);
  };
  return (
    <ScreenWrapper>
      <View style={styles.parentView}>
        <Text>Home</Text>

        <Button title="Go To Buttons" onPress={handleGoToButton} />
      </View>
    </ScreenWrapper>
  );
}
