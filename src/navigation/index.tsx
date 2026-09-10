import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigationTypes';
import screenNames from './routes';
import { HomeScreen } from '../features';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={screenNames.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export * from '../types/navigationTypes';
