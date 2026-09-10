import { StyleSheet } from 'react-native';
import { height } from '../../utils/Dimensons';
import { AppThemeColors } from '../../utils/Colors';

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: height(1),
    },
    sideContainer: {
      width: 44,
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center',
      letterSpacing: 0.3,
      color: colors.text,
    },
    subtitle: {
      fontSize: 12,
      marginTop: 2,
      textAlign: 'center',
      color: colors.textSecondary,
    },
    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 12,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: colors.actionBtnBg,
      borderColor: colors.actionBtnBorder,
    },
    themeToggleButton: {
      width: 40,
      height: 40,
      borderRadius: 12,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.themeToggleBg,
      borderColor: colors.themeToggleBorder,
    },
    chevronWrapper: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    chevron: {
      width: 10,
      height: 10,
      borderLeftWidth: 2.4,
      borderBottomWidth: 2.4,
      borderColor: colors.icon,
      transform: [{ rotate: '45deg' }],
      marginLeft: 3,
      borderRadius: 1,
    },
    themeIcon: {
      fontSize: 18,
      textAlign: 'center',
    },
    placeholder: {
      width: 40,
      height: 40,
    },
  });

export default getStyles;
