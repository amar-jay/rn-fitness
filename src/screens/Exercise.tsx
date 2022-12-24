import React from "react"
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import colors from "@/constants/colors"
import ExerciseCard from "@/components/ExerciseCard"
import { StackParamList } from "types"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ScreenNames } from "@/constants/navigation"

const Exercise = ({
  route
}: NativeStackScreenProps<StackParamList, ScreenNames["Exercise"]>) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ExerciseCard
        exImage={route?.params?.exImage || require("@/assets/splash.png")}
        exName={route?.params?.exName || "Exercise Name"}
        exDescription={route?.params?.exDescription || "Exercise Description"}
        exReps={"10"}
      />
    </SafeAreaView>
  )
}

export default Exercise

const _styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "center",
    marginTop: 20
  },
  headText: {
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    letterSpacing: 0.7,
    color: colors.app_color_primary
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  imageContainer: {},
  textContainer: {
    color: colors.app_color_primary,
    fontSize: 28,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600"
  },
  paraContainer: {
    marginTop: 10,
    color: colors.app_color_secondary,
    fontSize: 20
  }
})
