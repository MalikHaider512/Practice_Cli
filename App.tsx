import React from "react";
import Router from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Router />
    </GestureHandlerRootView>
  );
}

export default App;
