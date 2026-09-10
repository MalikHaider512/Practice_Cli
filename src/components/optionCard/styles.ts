import { StyleSheet } from 'react-native';
import { AppThemeColors } from '../../utils/Colors';
import { height } from '../../utils/Dimensons';

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: height(1.8),
      paddingHorizontal: 16,
      marginVertical: height(0.8),
      backgroundColor: colors.card,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
    },
    leftContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    rightContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 12,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
    },
    description: {
      fontSize: 13,
      marginTop: 4,
      color: colors.textSecondary,
    },
  });

export default getStyles;
