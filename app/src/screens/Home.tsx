import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  BackHandler,
  Alert,
  StatusBar,
  SafeAreaView
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { Card, Header, MainCard } from "@/components/";
import { wp, hp } from "@/utils/screen-dimension";
import colors from "@/constants/colors";
import { ScreenNames } from "@/constants/navigation";
import { StackParamList } from "types";

type Props = NativeStackScreenProps<StackParamList, ScreenNames["Home"]>;
const Home: React.FC<Props> = ({ navigation }) => {
  const home = useSelector((state: any) => state.home);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])
  );

  const backAction = () => {
    Alert.alert("Exit App", "Are you sure you want to exit?", [
      {
        text: "NO",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);

    return true;
  };

  const renderItem = ({ item }: any) => {
    return (
      <Card
        image={item.image}
        navigation={navigation}
        routineData={item.routineData}
        cardColor={item.color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.solidWhite} barStyle="dark-content" />
      <View style={{ backgroundColor: colors.solidWhite }}>
        <Header name={"Amar Jay Trainer"} mainCardHeader={"Today Workout"} />
        <MainCard
          image={require("../assets/icon.png")}
          headerText={"Legs of Iron"}
          subHeaderText={"Intermediate"}
          timeText={"20 mins"}
          routineType={"Legs of Iron"}
          navigation={navigation}
        />
      </View>
      <View
        style={{
          backgroundColor: colors.solidWhite,
          marginTop: 1,
          marginBottom: 20
        }}
      >
        <Text style={styles.routinesHeader}>Workout Routines</Text>
        <FlatList
          data={home.feedData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.flatListContainer}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  routinesHeader: {
    color: colors.description,
    fontSize: 18,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 0.7,
    marginTop: 20,
    marginLeft: 20
  },
  homeCard: {
    marginHorizontal: 20,
    borderWidth: 2,
    marginTop: 50
  },
  mainImage: {
    position: "absolute"
  },
  flatListContainer: {
    marginTop: 20
  },
  mainContainer: {
    backgroundColor: colors.homeBG,
    flex: 1
  },
  container: {
    backgroundColor: colors.secondary_container,
    height: hp(65),
    width: wp(100),
    marginTop: hp(35),
    position: "absolute",
    zIndex: -1
  }
});

export default Home;
