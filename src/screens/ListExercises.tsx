import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import library from "@/store/actions/library";
import routines from "@/assets/data/routine";
import { RoutineCard } from "../components/";
import colors from "../constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "types";
import screenNames from "@/constants/navigation";

type Props = NativeStackScreenProps<
  StackParamList,
  typeof screenNames.List_exercise
>;
const ExerciseLibrary = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.library);

  useEffect(() => {
    dispatch(library.routineLibrary(routines));
  }, []);

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <RoutineCard
        key={index}
        image={item.image}
        navigation={navigation as any}
        exerciseName={item.routineName}
        exerciseDescription={item.routineDescription}
      />
    );
  };

  return (
    <SafeAreaView style={{ paddingBottom: 70, backgroundColor: colors.homeBG }}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Exercises</Text>
      </View>
      <FlatList
        data={state.routineLibrary}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatListContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginHorizontal: 15,
    marginTop: 10
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  header: {
    fontSize: 24,
    color: colors.app_color_primary,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 0.7,
    marginVertical: 15
  }
});
export default ExerciseLibrary;
