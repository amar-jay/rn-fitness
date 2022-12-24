import React, { useEffect } from "react"
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  Platform
} from "react-native"
import routines from "@/assets/data/routine"
import RoutineCard from "@/components/RoutineCard"
import screenNames, { ScreenNames } from "@/constants/navigation"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import Button from "@/components/Button"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StackParamList } from "types"
import colors from "@/constants/colors"

// List specific exercises given a route parameter
const Routine = ({
  navigation,
  route
}: NativeStackScreenProps<StackParamList, ScreenNames["Routine"]>) => {
  const { routineType } = route?.params!
  const selectedRoutine = routines[0][routineType]
  const [error, setError] = React.useState(false)

  const renderItem = ({ item }: { item: typeof routines[0] }) => {
    return (
      item[routineType]?.map((x, index) => {
        return (
          <RoutineCard
            key={index}
            image={x.image}
            navigation={navigation}
            exerciseName={x.routineName}
            exerciseDescription={x.routineDescription}
          />
        )
      }) ?? <Text style={styles.errorText}>404 Exercise Not Found</Text>
    )
  }

  const startRoutine = () => {
    console.log("Routed to routine playlist")
    navigation.navigate(screenNames.Routine_playlist, { data: selectedRoutine })
  }
  useEffect(() => {
    if (selectedRoutine) {
      if (selectedRoutine.length > 0) {
        setError(false)
        return
      }
    }
    setError(true)
  }, [selectedRoutine])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={colors.app_color_primary}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>{routineType}</Text>
        </View>
        <FlatList
          data={routines}
          renderItem={renderItem as any}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatListContainer}
        />
        <View style={styles.buttonContainer}>
          {!error && (
            <Button
              textName="START"
              onClick={() => startRoutine()}
              buttonWidth={"65%"}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    color: colors.app_color_primary,
    textAlign: "center",
    marginTop: 20
  },
  header: {
    fontSize: 30,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 0.7,
    color: colors.app_color_primary,
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: colors.solidWhite,
    height: hp("80%"),
    width: wp("100%"),
    marginTop: hp("20%")
  },
  mainContainer: {
    backgroundColor: colors.app_Tint,
    flexDirection: "column",
    alignItems: "flex-end",
    flex: 1,
    paddingBottom: 30
  },
  flatListContainer: {
    marginHorizontal: 15,
    marginTop: 60,
    marginBottom: Platform.OS === "ios" ? 120 : 80,
    flex: 1
  },

  buttonContainer: {
    position: "absolute",
    //backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderColor: colors.app_Tint,
    flex: 1,
    paddingBottom: 30,
    width: "100%",
    marginTop: Platform.OS === "android" ? hp("65%") : hp("67%"),
    justifyContent: "center",
    flexDirection: "row"
  }
})

export default Routine
