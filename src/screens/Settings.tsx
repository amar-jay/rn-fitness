import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { FlatList, View, Text, StyleSheet } from "react-native"
//import PauseTime from '@/components/PauseTime';
//import Sound from '@/components/Sound';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP
} from "react-native-responsive-screen"
import Sound from "@/components/Demo"
import { MaterialIcons as Icon } from "@expo/vector-icons"
import PauseTime from "@/components/Demo"
import settings from "@/store/actions/settings"
import colors from "@/constants/colors"
import { SettingsState } from "@/store/reducers/settingsContext"
import InfoCard from "@/components/InfoCard"

interface SettingsData {
  image?: any
  description?: string
  name?: string
}
const settingsData = [
  {
    image: require("../assets/icon.png"),
    name: "Language"
  },

  {
    image: require("../assets/icon.png"),
    name: "Edit"
  },
  {
    image: require("../assets/icon.png"),
    name: "Dark Mode"
  }
]
const Settings = () => {
  const settingState: SettingsState = useSelector(
    (state: any) => state.settings
  )
  const dispatch = useDispatch()

  const [pauseTimeOptions, setOptions] = useState(settingState.pauseTimeOptions)
  const [soundInfo, setSound] = useState(settingState.soundInfo)

  const updatePauseTime = () => {
    const data = settingState.pauseTimeOptions.filter((i: any) => i.selected)
    dispatch(settings.setBreakTime(data[0].value))
  }

  const updateSound = () => {
    const data: boolean = !soundInfo
    setSound(data)
    dispatch(settings.toggleSound(data))
  }

  useEffect(() => {}, [pauseTimeOptions, soundInfo])

  const renderItem = ({ item, index }: any) => {
    return (
      <InfoCard
        key={index}
        image={item?.image}
        description={item?.description}
        style={[
          styles.subContainer,
          {
            top: 0,
            width: widthPercentageToDP("90%"),
            paddingHorizontal: 10,
            backgroundColor: colors.cardBG,
            paddingVertical: 5,
            borderRadius: 10
          }
        ]}
        name={item?.name}
      />
    )
  }

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
            { borderRadius: 0, width: wp("100%"), padding: 30 }
          ]}
          description="Ad Exercitationem"
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
  )
}

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
})

export default Settings
