import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Alert,
  BackHandler,
  StatusBar
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ExerciseCard from "../components/ExerciseCard";
import BreakPause from "@/components/BreakPause";
import screenNames, { ScreenNames } from "../constants/navigation";
import NativeButton from "../components/Button";
import ExerciseHeader from "@/components/ExerciseHeader";
import CompleteExercise from "./CompleteExercise";
import { useSelector } from "react-redux";
import colors from "../constants/colors";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from "@react-navigation/native-stack";
import { Routine, StackParamList } from "types";

type Props = NativeStackScreenProps<
  StackParamList,
  ScreenNames["Routine_playlist"]
>;
const RoutinePlaylist: React.FC<Props> = ({ navigation, route }) => {
  const { data } = route.params; // to-do state management
  const [currentIndex, setIndex] = useState(0);
  const [image, setImage] = useState<Routine[0]["image"]>(data[0].image);
  const [name, setName] = useState<Routine[0]["routineDescription"]>(
    data[0].routineName
  );
  const [description, setDescription] = useState<
    Routine[0]["routineDescription"]
  >(data[0].routineDescription);

  const [delayExercise, setDelay] = useState(false);

  const [completeEx, setComplete] = useState(false);

  const settingSelector = useSelector((state: any) => state.settings);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", quitWorkout);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", quitWorkout);
    }, [currentIndex, delayExercise])
  );

  const onClickNext = () => {
    if (currentIndex < data.length) {
      setImage(data[currentIndex].image);
      setName(data[currentIndex].routineName);
      setDescription(data[currentIndex].routineDescription);
      setIndex(currentIndex + 1);
      setDelay(!delayExercise);

      if (currentIndex !== 0) {
        manageBreak();
      } else {
        setDelay(!!delayExercise);
      }
    }

    if (currentIndex === data.length) {
      setComplete(true);
    }
  };

  const manageBreak = () => {
    setTimeout(
      () => setDelay(!!delayExercise),
      settingSelector.breakTime * 1000
    );
  };

  const toggleBreak = () => {
    setDelay(!delayExercise);
  };

  const quitWorkout = () => {
    Alert.alert("Exit Routine!", "Are you sure you want to exit routine?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "YES",
        onPress: () =>
          navigation.reset({
            routes: [{ name: screenNames.Home }]
          })
      }
    ]);
    return true;
  };

  const renderComponent = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar
          backgroundColor={colors.solidWhite}
          barStyle="dark-content"
        />
        {!delayExercise && currentIndex > 0 ? (
          <ExerciseHeader
            goBack={() => navigation.goBack()}
            quit={quitWorkout}
            exerciseGroup={name}
          />
        ) : null}
        <View>
          {delayExercise || currentIndex == 0 ? (
            <BreakPause
              currentIndex={currentIndex}
              toggleButton={toggleBreak}
            />
          ) : (
            <ExerciseCard
              exImage={image}
              exName={name}
              exDescription={description}
            />
          )}
        </View>
        {delayExercise ? null : (
          <View style={styles.buttonContainer}>
            <NativeButton
              textName="Next"
              onClick={() => onClickNext()}
              buttonWidth={30}
            />
          </View>
        )}
      </SafeAreaView>
    );
  };

  return !completeEx ? (
    renderComponent()
  ) : (
    <CompleteExercise
      route={route as any}
      navigation={
        navigation as NativeStackNavigationProp<
          StackParamList,
          "EXERCISE_COMPLETED",
          undefined
        >
      }
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    bottom: 30
  }
});

export default RoutinePlaylist;
