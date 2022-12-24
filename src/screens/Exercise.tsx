import React from "react"
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import colors from "@/constants/colors"
import ExerciseCard from "@/components/ExerciseCard"
//import { RootStackParamList } from '@/navs'

interface Params  {
  exImage: NodeRequire,
  exDescription: string,
  exName: string,
  exReps: unknown
}

type Props = ScreenProps<"Main", {}, {}>
const Exercise:React.FC<Props> = ({route}) => {
    const {exName, exDescription, exImage, exReps} = route.params;
  
  let exImage= require("src/assets/splash.png"),
   exDescription= "undefined",
   exName= "unknown",
   exReps= {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ExerciseCard
        exImage={exImage}
        exName={exName}
        exDescription={exDescription}
        exReps={exReps}
      />
    </SafeAreaView>
  )
}

//add circular timer
export default Exercise

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "center",
    marginTop: 20
  },
  headText: {
    fontSize: 20,
    fontFamily: "Raleway-Bold",
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
