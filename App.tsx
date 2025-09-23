import React from "react";
import Router from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Router />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
