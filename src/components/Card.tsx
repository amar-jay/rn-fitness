import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import screenNames from "@/constants/navigation";
import { wp, hp } from "@/utils/screen-dimension";
import colors from "@/constants/colors";

interface Props {
  image: any;
  navigation: any;
  routineData: any;
  cardColor: any;
}
const Card: React.FC<Props> = ({
  image,
  navigation,
  routineData,
  cardColor
}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate(screenNames.Routine, {
          routineType: routineData.routine_name
        })
      }
    >
      <View style={styles.container}>
        <Image
          source={image}
          style={[
            styles.imageContainer,
            { width: wp(55), height: hp(25), borderRadius: 20 }
          ]}
        />
      </View>
      <View style={styles.mainContainer}>
        <Text style={[styles.textContainer, { fontWeight: "700" }]}>
          {routineData.routine_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden"
  },
  cardContainer: {
    padding: 5,
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 20,
    flexDirection: "column",
    borderColor: colors.app_color_primary,
    marginBottom: 40
  },
  textContainer: {
    paddingTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    alignSelf: "center",
    color: colors.app_color_primary,
    letterSpacing: 2
  },
  imageContainer: {}
});
