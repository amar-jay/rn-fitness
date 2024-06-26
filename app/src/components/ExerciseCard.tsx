import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { wp, hp } from "@/utils/screen-dimension";

interface Props {
  exImage: any;
  exName: string;
  exDescription: string;
  exReps?: string;
}
const ExerciseCard: React.FC<Props> = ({
  exImage,
  exName,
  exDescription,
  exReps
}) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={exImage}
          style={[styles.imageContainer, { width: wp(90), height: hp(50) }]}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.subContainer, { marginHorizontal: 40, top: -40 }]}>
        <Text style={styles.textContainer}>{exName}</Text>
        <Text style={styles.paraContainer}>{exDescription}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "center",
    marginTop: 20
  },
  headText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.app_color_primary
  },
  container: {
    margin: 30,
    height: hp(60),
    marginHorizontal: 20,
    alignItems: "center"
  },
  subContainer: {
    alignItems: "center"
  },
  imageContainer: {
    borderRadius: 20
  },
  textContainer: {
    color: colors.app_color_primary,
    fontSize: 28,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif-medium"
  },
  paraContainer: {
    color: colors.app_color_secondary,
    fontSize: 20,
    marginTop: 10,
    fontFamily: "sans-serif-medium"
  },
  repsContainer: {
    color: colors.description,
    fontSize: 20,
    marginTop: 10,
    fontWeight: "500"
  }
});

export default ExerciseCard;
