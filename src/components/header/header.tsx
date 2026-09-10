import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '../../hooks';
import getStyles from './styles';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBackPress?: () => void;
  showThemeToggle?: boolean;
  onThemeToggle?: () => void;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
}

export default function Header({
  title = 'Home',
  subtitle,
  showBack = true,
  onBackPress,
  showThemeToggle = true,
  onThemeToggle,
  leftElement,
  rightElement,
  containerStyle,
  titleStyle,
  subtitleStyle,
}: HeaderProps) {
  const { colors, isDark, toggleTheme } = useAppTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const navigation = useNavigation();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (
      navigation &&
      typeof navigation.canGoBack === 'function' &&
      navigation.canGoBack()
    ) {
      navigation.goBack();
    }
  };

  const handleThemeToggle = () => {
    if (onThemeToggle) {
      onThemeToggle();
    } else {
      toggleTheme();
    }
  };

  const renderLeft = () => {
    if (leftElement !== undefined) {
      return leftElement;
    }

    if (!showBack) {
      return <View style={styles.placeholder} />;
    }

    return (
      <TouchableOpacity
        style={styles.actionButton}
        onPress={handleBack}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <View style={styles.chevronWrapper}>
          <View style={styles.chevron} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderRight = () => {
    if (rightElement !== undefined) {
      return rightElement;
    }

    if (!showThemeToggle) {
      return <View style={styles.placeholder} />;
    }

    return (
      <TouchableOpacity
        style={styles.themeToggleButton}
        onPress={handleThemeToggle}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <Text style={styles.themeIcon}>{isDark ? '☀️' : '🌙'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.sideContainer}>{renderLeft()}</View>

      <View style={styles.centerContainer}>
        <Text
          style={[styles.title, titleStyle]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={[styles.subtitle, subtitleStyle]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.sideContainer}>{renderRight()}</View>
    </View>
  );
}
