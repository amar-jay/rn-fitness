import React, { useEffect } from "react";
import { SafeAreaView, Image, View, Text, StyleSheet } from "react-native";
import colors, { countdownColors } from "../constants/colors";
import NativeButton from "./Button";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { Audio } from "expo-av";
import { useSelector } from "react-redux";
interface Props {
  currentIndex: number;
  toggleButton: () => void;
}
const BreakPause: React.FC<Props> = ({ currentIndex, toggleButton }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    const main = async () => {
      if (!isPlaying) {
        const { sound } = await Audio.Sound.createAsync(
          require("../assets/audio/bell_1.wav")
        );
        await sound.playAsync();
        setIsPlaying(false);
      }
    };
    main();
  }, [!isPlaying]);
  const selector = useSelector((state: any) => state.settings);

  return (
    <SafeAreaView>
      {currentIndex === 0 ? (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={{ width: wp("80%"), height: hp("40%") }} />
          </View>
          <View style={styles.info}>
            <Text style={styles.textContainer}>Let's Begin</Text>
            <Text style={styles.paraContainer}>
              Press next to start exercise
            </Text>
          </View>
        </View>
      ) : (
        <View style={{ top: 40 }}>
          <View style={styles.container}>
            <CountdownCircleTimer
              isPlaying={true}
              duration={selector.breakTime}
              colors={countdownColors as any}
              colorsTime={[10, 6, 3, 0]}
              strokeWidth={15}
              size={300}
              onUpdate={remainingTime => {
                if (remainingTime == 1 && selector.soundInfo) {
                  setIsPlaying(false);
                }
              }}
            >
              {({ remainingTime, color }) => (
                <Text style={{ color, fontSize: 80 }}>{remainingTime}</Text>
              )}
            </CountdownCircleTimer>
          </View>
          <View
            style={{ flexDirection: "column", alignItems: "center", top: 60 }}
          >
            <Text style={styles.textContainer}>Take a Break</Text>
            <View style={styles.buttonContainer}>
              <NativeButton
                textName="SKIP"
                onClick={() => toggleButton()}
                buttonWidth={"30%"}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default BreakPause;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 80
  },
  info: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40
  },
  container: {
    margin: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  textContainer: {
    color: colors.heading,
    fontSize: 32,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    letterSpacing: 0.7,
    alignItems: "center",
    justifyContent: "center"
  },
  paraContainer: {
    top: 20,
    color: colors.description,
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    fontWeight: "bold"
  }
});
