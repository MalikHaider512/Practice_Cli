import { StatusBarStyle } from 'react-native';

const common = {
  primary: '#6366F1',
  primaryDark: '#4F46E5',
  secondary: '#EC4899',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

const light = {
  ...common,
  background: '#F8FAFC',
  surface: '#FFFFFF',
  card: '#FFFFFF',
  text: '#0F172A',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',
  border: '#E2E8F0',
  shadow: '#000000',
  icon: '#334155',
  statusBar: 'dark-content' as StatusBarStyle,
  actionBtnBg: 'rgba(0, 0, 0, 0.03)',
  actionBtnBorder: '#E2E8F0',
  themeToggleBg: 'rgba(99, 102, 241, 0.08)',
  themeToggleBorder: 'rgba(99, 102, 241, 0.25)',
};

const dark = {
  ...common,
  background: '#0F172A',
  surface: '#1E293B',
  card: '#1E293B',
  text: '#F8FAFC',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  border: '#334155',
  shadow: '#000000',
  icon: '#94A3B8',
  statusBar: 'light-content' as StatusBarStyle,
  actionBtnBg: 'rgba(255, 255, 255, 0.06)',
  actionBtnBorder: '#334155',
  themeToggleBg: 'rgba(245, 158, 11, 0.12)',
  themeToggleBorder: 'rgba(245, 158, 11, 0.3)',
};

export type AppThemeColors = typeof light;
export type ThemeMode = 'light' | 'dark' | 'system';

export const colors = {
  ...light,
  common,
  light,
  dark,
};

export { common, light, dark };
