import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { getStyles } from './styles';
import { useAppTheme } from '../../hooks';

interface OptionCardProps {
  title: string;
  description?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function OptionCard({
  title,
  description,
  onPress,
  icon,
  rightIcon,
}: OptionCardProps) {
  const { colors } = useAppTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  const renderRightIcon = () => {
    if (rightIcon) {
      return rightIcon;
    }
    if (icon && typeof icon !== 'string') {
      return icon;
    }
    return <ChevronRight size={20} color={colors.icon} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        {description ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
      </View>
      <View style={styles.rightContainer}>{renderRightIcon()}</View>
    </TouchableOpacity>
  );
}
