import { StyleSheet } from 'react-native';
import { AppThemeColors } from '../../../utils/Colors';

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colors.background,
    },
  });

export default getStyles;
