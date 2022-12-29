import React, { useEffect } from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import colors from "../constants/colors";
import screenNames, { ScreenNames } from "../constants/navigation";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "types";
import { Logo } from "@/components/Logo";

const Splash = ({
  navigation
}: NativeStackScreenProps<StackParamList, ScreenNames["Splash_screen"]>) => {
  useEffect(() => {
    setTimeout(() => checkFirstLogin(), 1000);
  }, []);

  const checkFirstLogin = async () => {
    try {
      /* const firstLaunch = await AsyncStorage.getItem('firstLaunch');
      if (!firstLaunch) {
        await AsyncStorage.setItem('firstLaunch', 'false');
        navigation.navigate(screenNames.USER_CONTAINER);
      } else {
        navigation.navigate(screenNames.HOME);
      } */
      navigation.navigate(screenNames.Home);
    } catch (e) {
      console.error("navigation error", e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.app_Tint} barStyle="light-content" />
      {/* <Image
        source={require("@expo/snack-static/react-native-logo.png")}
        style={styles.image}
      /> */}
      <Logo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp("80%"),
    height: hp("40%"),
    marginBottom: 200
  },
  container: {
    flex: 1,
    backgroundColor: colors.app_Tint,
    alignItems: "center",
    justifyContent: "center"
  },
  headText: {
    fontSize: 35,
    fontFamily: "sans-serif-condensed",
    color: colors.solidWhite,
    letterSpacing: 0.5
  }
});

export default Splash;
