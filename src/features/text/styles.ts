import { StyleSheet } from 'react-native';
import { AppThemeColors } from '../../utils/Colors';

export const getStyles = (colors: AppThemeColors) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
    },
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingBottom: 40,
    },
    // Hero Card
    heroCard: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 16,
      marginVertical: 12,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    heroBadge: {
      alignSelf: 'flex-start',
      backgroundColor: 'rgba(99, 102, 241, 0.12)',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 8,
      marginBottom: 8,
    },
    heroBadgeText: {
      fontSize: 12,
      fontWeight: '700',
      color: colors.primary,
      textTransform: 'uppercase',
    },
    heroTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 6,
    },
    heroDescription: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.textSecondary,
      marginBottom: 12,
    },
    ruleAlert: {
      backgroundColor: 'rgba(239, 68, 68, 0.08)',
      borderRadius: 8,
      padding: 10,
      borderLeftWidth: 4,
      borderLeftColor: colors.error,
      marginBottom: 10,
    },
    ruleAlertText: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.error,
      lineHeight: 18,
    },
    platformRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4,
    },
    platformChip: {
      backgroundColor: colors.surface,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: colors.border,
    },
    platformChipText: {
      fontSize: 12,
      color: colors.textSecondary,
      fontWeight: '500',
    },
    // Section Card
    sectionCard: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.04,
      shadowRadius: 6,
      elevation: 2,
    },
    sectionHeader: {
      marginBottom: 12,
    },
    sectionNumberBadge: {
      alignSelf: 'flex-start',
      backgroundColor: colors.primary,
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 2,
      marginBottom: 6,
    },
    sectionNumberText: {
      fontSize: 11,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    sectionTitle: {
      fontSize: 17,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 4,
    },
    sectionSubtitle: {
      fontSize: 13,
      lineHeight: 18,
      color: colors.textSecondary,
    },
    // Controls / Buttons
    controlLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.textSecondary,
      marginTop: 10,
      marginBottom: 6,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    buttonRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 8,
    },
    pillButton: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    pillButtonActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    pillButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.textSecondary,
    },
    pillButtonTextActive: {
      color: '#FFFFFF',
    },
    // Preview Canvas
    previewCanvas: {
      backgroundColor: colors.surface,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 14,
      marginVertical: 10,
      minHeight: 80,
      justifyContent: 'center',
    },
    // Code snippet
    codeBlock: {
      backgroundColor: colors.surface,
      borderRadius: 10,
      padding: 10,
      marginTop: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    codeText: {
      fontFamily: 'monospace',
      fontSize: 12,
      color: colors.text,
      lineHeight: 18,
    },
    // Interactive Touch & Link Demo
    linkCard: {
      backgroundColor: colors.surface,
      borderRadius: 10,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.border,
      marginVertical: 8,
    },
    linkBaseText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.text,
    },
    linkHighlight: {
      color: colors.primary,
      fontWeight: '700',
      textDecorationLine: 'underline',
    },
    linkSecondaryHighlight: {
      color: '#EC4899',
      fontWeight: '700',
    },
    feedbackToast: {
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      borderRadius: 8,
      padding: 8,
      marginTop: 8,
      borderWidth: 1,
      borderColor: 'rgba(99, 102, 241, 0.25)',
    },
    feedbackToastText: {
      fontSize: 12,
      fontWeight: '600',
      color: colors.primary,
      textAlign: 'center',
    },
    // E-commerce Price Demo
    priceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginVertical: 8,
    },
    originalPrice: {
      fontSize: 16,
      color: colors.textMuted,
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
      textDecorationColor: colors.textMuted,
    },
    salePrice: {
      fontSize: 22,
      fontWeight: '800',
      color: colors.primary,
    },
    discountBadge: {
      backgroundColor: 'rgba(34, 197, 94, 0.15)',
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 6,
    },
    discountBadgeText: {
      color: '#16A34A',
      fontSize: 12,
      fontWeight: '700',
    },
    // Selectable Text Demo
    selectableBox: {
      backgroundColor: colors.surface,
      borderRadius: 10,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.primary,
      marginVertical: 8,
    },
    // Android Font Padding Comparison
    comparisonRow: {
      flexDirection: 'row',
      gap: 12,
      marginVertical: 8,
    },
    comparisonItem: {
      flex: 1,
      backgroundColor: colors.surface,
      borderRadius: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: 'center',
    },
    badgeItem: {
      backgroundColor: colors.primary,
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginTop: 6,
    },
    badgeItemText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '700',
    },
  });

export default getStyles;
