import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import screenNames, { ScreenNames } from "../constants/navigation";
import { hp, wp } from "@/utils/screen-dimension";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "types";

interface Props
  extends Omit<
    NativeStackScreenProps<StackParamList, ScreenNames[keyof ScreenNames]>,
    "route"
  > {
  image: any;
  exerciseName: string;
  exerciseDescription: string;
  exerciseRep?: string;
}
const RoutineCard: React.FC<Props> = ({
  image,
  navigation,
  exerciseName,
  exerciseDescription,
  exerciseRep
}: any) => {
  return (
    <View
      style={{
        marginHorizontal: 5,
        marginVertical: 8
      }}
    >
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          navigation.navigate(screenNames.Routine, {
            exName: exerciseName,
            exDescription: exerciseDescription,
            exImage: image,
            exReps: exerciseRep
          })
        }
      >
        <Image
          source={image}
          style={[styles.imageContainer, { width: wp(24), height: hp(12) }]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.headContainer}>{exerciseName}</Text>
          <Text
            style={styles.paraContainer}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {exerciseDescription}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RoutineCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5
  },
  imageContainer: {
    borderRadius: 20
  },
  cardContainer: {
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "rgba(240, 240, 240, 0.5)"
  },
  headContainer: {
    fontFamily: "sans-serif-condensed",
    fontSize: 20,
    color: colors.app_color_primary,
    marginLeft: 20
  },
  paraContainer: {
    fontWeight: "400",
    color: colors.app_color_secondary,
    fontSize: 16,
    marginTop: 5,
    paddingLeft: 20
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    //borderWidth: 2,
    justifyContent: "center"
  },
  shadowContainer: {
    borderRadius: 20
    //borderWidth: 2,
  }
});
