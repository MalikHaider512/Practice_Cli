import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import styles from './styles';

export default function FireStore() {
  return (
    <ScreenWrapper>
      <View style={styles.parentView}>
        <Text>FireStore</Text>
      </View>
    </ScreenWrapper>
  );
}
