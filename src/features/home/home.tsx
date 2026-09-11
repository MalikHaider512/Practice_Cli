import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '../../hooks';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, OptionCard } from '../../components';
import { featuresList } from '../../utils/Data';
import type { RootStackParamList } from '../../types/navigationTypes';

export default function Home() {
  const { colors } = useAppTheme();
  const navigation = useNavigation();

  const handlePress = (screen?: keyof RootStackParamList) => {
    if (!screen) return;
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Header />
      <FlatList
        data={featuresList}
        renderItem={({ item }) => (
          <OptionCard
            title={item?.name}
            description={''}
            onPress={() => handlePress(item.screen as keyof RootStackParamList)}
            icon={''}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
