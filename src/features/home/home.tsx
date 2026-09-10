import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAppTheme } from '../../hooks';
import styles from './styles';

export default function Home() {
  const { colors, isDark, toggleTheme, setThemeMode, themeMode } =
    useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Home Screen</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Current Mode: {themeMode} ({isDark ? 'Dark Theme' : 'Light Theme'})
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: colors.white }]}>
          Toggle Theme ({isDark ? 'Light' : 'Dark'})
        </Text>
      </TouchableOpacity>

      <View style={styles.modeContainer}>
        <TouchableOpacity
          style={[
            styles.modeChip,
            {
              backgroundColor:
                themeMode === 'light' ? colors.primary : colors.surface,
              borderColor: colors.border,
            },
          ]}
          onPress={() => setThemeMode('light')}
        >
          <Text
            style={{
              color: themeMode === 'light' ? colors.white : colors.text,
            }}
          >
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.modeChip,
            {
              backgroundColor:
                themeMode === 'dark' ? colors.primary : colors.surface,
              borderColor: colors.border,
            },
          ]}
          onPress={() => setThemeMode('dark')}
        >
          <Text
            style={{ color: themeMode === 'dark' ? colors.white : colors.text }}
          >
            Dark
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.modeChip,
            {
              backgroundColor:
                themeMode === 'system' ? colors.primary : colors.surface,
              borderColor: colors.border,
            },
          ]}
          onPress={() => setThemeMode('system')}
        >
          <Text
            style={{
              color: themeMode === 'system' ? colors.white : colors.text,
            }}
          >
            System
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
