import React from 'react';
import { FlatList } from 'react-native';
import { useAppTheme } from '../../hooks';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, OptionCard } from '../../components';
import { featuresList } from '../../utils/Data';

export default function Home() {
  const { colors } = useAppTheme();

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
            onPress={() => {}}
            icon={''}
          />
        )}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
