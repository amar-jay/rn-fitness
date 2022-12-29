import "react-native-gesture-handler";
import React from "react";
//import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from "react-redux";
import { store, persistor } from "@/store";

import { Platform, StatusBar } from "react-native";

import { colorAtom } from "@/store/atoms/colors";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigations";
import { useAtom } from "jotai";

const PersistGate = ({ children }: any) => <>{children}</>;
const [colors] = useAtom(colorAtom);

const App = () => {
  return (
    <>
      {Platform.OS === "android" ? (
        <StatusBar
          backgroundColor={colors.solidWhite}
          barStyle="dark-content"
        />
      ) : null}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
