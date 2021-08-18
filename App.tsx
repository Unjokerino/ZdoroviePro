import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "./components/Themed";
import * as GoogleSignIn from "expo-google-sign-in";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </View>
        <StatusBar style="light" />
      </Provider>
    );
  }
}
