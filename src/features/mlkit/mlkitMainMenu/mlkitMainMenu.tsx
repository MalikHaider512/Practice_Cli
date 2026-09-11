import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, OptionCard } from '../../../components';
import { mlkitList } from '../../../utils/Data';
import { getStyles } from './styles';
import { useAppTheme } from '../../../hooks';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../../types/navigationTypes';

export default function MLKitMainMenu() {
  const { colors } = useAppTheme();
  const styles = getStyles(colors);
  const navigation = useNavigation();

  const handlePress = (screen?: keyof RootStackParamList) => {
    if (!screen) return;
    navigation.navigate(screen);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="MLKit" subtitle="Choose a feature to use" />
      {mlkitList.map(item => (
        <OptionCard
          key={item?.id}
          title={item?.name}
          onPress={() => handlePress(item?.screen as keyof RootStackParamList)}
        />
      ))}
    </SafeAreaView>
  );
}
