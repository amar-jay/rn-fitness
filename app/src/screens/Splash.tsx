import React, { useEffect } from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import colors from "../constants/colors";
import screenNames, { ScreenNames } from "../constants/navigation";
import { wp, hp } from "@/utils/screen-dimension";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "types";
import { Logo } from "@/components/Logo";
import { useAtom } from "jotai";
import { isAuthAtom } from "@/store/atoms/auth";
import alert from "@/utils/alert-message";

const Splash = ({
  navigation
}: NativeStackScreenProps<StackParamList, ScreenNames["Splash_screen"]>) => {
  const [isAuth] = useAtom(isAuthAtom);
  useEffect(() => {
    setTimeout(() => checkFirstLogin(), 1000);
  }, []);

  const checkFirstLogin = async () => {
    try {
      // const firstLaunch = await AsyncStorage.getItem('firstLaunch');
      const firstLaunch = true;
      if (!firstLaunch && isAuth) {
        //await AsyncStorage.setItem('firstLaunch', 'false');
        //navigation.navigate(screenNames.HOME);
      } else {
        navigation.navigate(screenNames.Login);
      }
    } catch (e) {
      console.error("navigation error", e);
      alert("navigation error", e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.app_Tint} barStyle="light-content" />
      <Logo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp(80),
    height: hp(40),
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
