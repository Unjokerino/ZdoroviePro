import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "./components/Themed";
import { Colors, SCREEN_WIDTH } from "./constants";

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
      <Provider>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 30,
              width: SCREEN_WIDTH,
              backgroundColor: Colors[colorScheme].header,
            }}
          ></View>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </View>
      </Provider>
    );
  }
}
