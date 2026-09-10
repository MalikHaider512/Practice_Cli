import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context';
import { useAppTheme } from './src/hooks';
import { RootNavigator } from './src/navigation';

function AppContent() {
  const { statusBarStyle } = useAppTheme();

  return (
    <>
      <StatusBar barStyle={statusBarStyle} />
      <RootNavigator />
    </>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
