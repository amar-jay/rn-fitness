import React from "react";
import { useSelector } from "react-redux";
import { FlatList, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { InfoCard, Touchable } from "@/components";
import { wp } from "@/utils/screen-dimension";
import alert from "@/utils/alert-message";
import handleUrl from "@/utils/handle-url";
import colors from "@/constants/colors";
import type { SettingsData } from "types";
//import Sound from '@/components/Sound';
//import PauseTime from '@/components/PauseTime';

const settingsData: SettingsData[] = [
  {
    icon: require("../assets/icon.png"),
    name: "Language"
  },
  {
    icon: require("../assets/icon.png"),
    name: "Edit"
  },
  {
    icon: require("../assets/icon.png"),
    name: "Dark Mode"
  },
  {
    icon: require("../assets/icon.png"),
    name: "About"
  }
];

//type Props = NativeStackScreenProps<StackParamList, ScreenNames["Settings"]>;
const Settings: React.FC<{}> = () => {
  const settingState = useSelector((state: any) => state.settings);

  /*

  const [pauseTimeOptions, _setOptions] = useState(
    settingState.pauseTimeOptions
  );
  const [soundInfo, _setSound] = useState(settingState.soundInfo);
  const _dispatch = useDispatch()
  const _updatePauseTime = () => {
    const data = settingState.pauseTimeOptions.filter((i: any) => i.selected)
    dispatch(settings.setBreakTime(data[0].value))
  }

  const _updateSound = () => {
    const data: boolean = !soundInfo
    setSound(data)
    dispatch(settings.toggleSound(data))
  }

  useEffect(() => {}, [pauseTimeOptions, soundInfo]);
  */
  const renderItem = ({
    item,
    index
  }: {
    item: SettingsData;
    index: number;
  }) => {
    const handlePress = async () => {
      switch (item.name) {
        case "Language":
          alert("Notification", "Only English is supported");
          break;
        case "Edit":
          alert("Notification", "Unimplemented feature 🚧");
          break;
        case "Dark Mode":
          console.log("Dark Mode");
          alert("Notification", "Unimplemented feature 🚧");
          break;
        case "About":
          await handleUrl("www.expo.dev").catch(e => {
            alert("Notification", JSON.stringify(e));
          });
          break;
        default:
          alert("Notification", "Unknown event");
          break;
      }
    };
    return (
      <Touchable onPress={handlePress}>
        <InfoCard
          key={index}
          image={item?.icon}
          description={item?.description}
          style={[
            styles.subContainer,
            {
              top: 0,
              width: wp(90),
              paddingHorizontal: 10,
              backgroundColor: colors.cardBG,
              paddingVertical: 5,
              borderRadius: 10
            }
          ]}
          name={item?.name}
        />
      </Touchable>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
      }}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Settings</Text>
        </View>
        <InfoCard
          name={settingState.userName}
          image={require("../assets/images/exercise_1.jpeg")}
          style={[
            styles.subContainer,
            { borderRadius: 0, width: wp(100), padding: 30 }
          ]}
          description={settingState.userEmail}
        />
        <FlatList
          style={{ flex: 1, marginTop: 20 }}
          contentContainerStyle={styles.listContainer}
          renderItem={renderItem}
          data={settingsData}
        />
        {/* <InfoCard style={styles.soundContainer} />
        <View style={styles.subContainer}>
           <PauseTime buttonsData={pauseTimeOptions} onClick={updatePauseTime} /> 
          <Icon name="playlist-play" size={24} color="black" />
        </View>
        <View style={styles.soundContainer}>
          <Icon name="volume-up" size={24} color="black" />
          <Sound soundInfo={soundInfo} toggleSound={updateSound} /> 
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    alignItems: "center",
    top: 20
  },
  soundContainer: {
    top: 30
  },
  container: {
    flex: 1
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  listContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 40,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    color: colors.app_color_primary
  },
  subHeader: {
    fontSize: 24,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    letterSpacing: 1,
    color: colors.app_color_primary
  }
});

export default Settings;
