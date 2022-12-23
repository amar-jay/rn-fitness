import React from "react"
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Platform
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import colors from "@/constants/colors"
import routines from "@/assets/data/routine"
import screenNames from "@/constants/navigation"

interface Props {
  routineType: string
  image: any
  headerText: string
  subHeaderText: string
  timeText: string
  navigation: any
}
const MainCard: React.FC<Props> = ({
  routineType,
  image,
  headerText,
  subHeaderText,
  timeText,
  navigation
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(screenNames.ROUTINE, {
          routineType: routineType
        })
      }}
    >
      <View style={styles.cardContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.textContainer}>{headerText}</Text>
          <View style={styles.levelContainer}>
            <Text
              style={{
                fontFamily: "Raleway-Bold",
                letterSpacing: 0.7,
                fontSize: 14,
                color: colors.app_color_secondary,
                marginLeft: 1
              }}
            >
              {subHeaderText}
            </Text>
          </View>
          <Text style={styles.timeContainer}>{timeText}</Text>
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.mainContainer}>
            <Image source={image} style={styles.imageContainer} />
          </View>
          <View style={styles.buttonContainer}>
            {/* <LottieView
              source={require("../assets/animations/lottieStart.json")}
              autoPlay
              loop
            /> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MainCard

const styles = StyleSheet.create({
  planContainer: {
    fontSize: 14,
    fontWeight: "700",
    flexDirection: "row"
  },
  linearGradient: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5
  },
  timeContainer: {
    marginTop: Platform.OS === "android" ? hp("18%") : hp("20%"),
    fontSize: 20,
    fontFamily: "sans-serif-bold",
    letterSpacing: 0.7,
    color: colors.app_color_primary
  },
  levelContainer: {
    flexDirection: "row",
    marginTop: 5
  },
  leftContainer: {
    marginTop: Platform.OS === "android" ? hp("2%") : hp("3%"),
    flexDirection: "column",
    marginRight: 60
  },
  startContainer: {
    color: colors.solidWhite,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 2
  },
  rightColumn: {
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  buttonContainer: {
    height: hp("10%"),
    width: wp("50%"),
    position: "absolute",
    bottom: 1,
    right: -30
  },
  cardContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: "rgba(204, 232, 255, 0.7)",
    justifyContent: "center",
    height: hp("35%")
  },
  imageContainer: {
    bottom: 40,
    height: hp("30%"),
    width: wp("30%")
  },
  mainContainer: {
    justifyContent: "center"
  },
  textContainer: {
    fontSize: 24,
    color: colors.app_color_primary,
    fontFamily: "sans-serif-medium",
    width: wp("35%")
  }
})
