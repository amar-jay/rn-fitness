import React, { useEffect, useState } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { View, Text, StyleSheet } from "react-native"
//import PauseTime from '@/components/PauseTime';
//import Sound from '@/components/Sound';
import Sound from "@/components/Demo"
import { MaterialIcons as Icon } from "@expo/vector-icons"
import PauseTime from "@/components/Demo"
import settings from "@/store/actions/settings"
import colors from "@/constants/colors"
import { SettingsState } from "@/store/reducers/settingsContext"
import InfoCard from "@/components/InfoCard"

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Settings</Text>
        </View>
        <View style={styles.listContainer}>
          <InfoCard
            name={settingState.userName}
            image={require("../assets/splash.png")}
            style={styles.subContainer}
          />
        </View>
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
    top: 20
  },
  soundContainer: {
    top: 30
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 20,
    paddingHorizontal: 20,
    paddingBottom: 20
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
