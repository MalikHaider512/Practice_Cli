import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigationTypes';
import screenNames from './routes';
import {
  FaceDetectionScreen,
  FoodDetectionScreen,
  HomeScreen,
  ImageLabellingScreen,
  MLKitMainMenuScreen,
} from '../features';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.HOME}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={screenNames.HOME} component={HomeScreen} />
        <Stack.Screen
          name={screenNames.MLKITMAINMENU}
          component={MLKitMainMenuScreen}
        />
        <Stack.Screen
          name={screenNames.FACEDETECTION}
          component={FaceDetectionScreen}
        />
        <Stack.Screen
          name={screenNames.IMAGELABELLING}
          component={ImageLabellingScreen}
        />
        <Stack.Screen
          name={screenNames.FOODDETECTION}
          component={FoodDetectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export * from '../types/navigationTypes';
