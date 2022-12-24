import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StackParamList } from "types"

import UserContainer from "@/screens/UserContainer"

import Home from "@/screens/Home"
import Exercise from "@/screens/Exercise"
import RoutineList from "@/screens/RoutineList"
import ListExercise from "@/screens/ListExercises"
/*
import Settings from '@/screens/Settings';
import RoutinePlaylist from "@/screens/RoutinePlayList"
import CompleteExercise from '@/screens/CompleteExercise';
*/

import screenNames from "@/constants/navigation"
import { MaterialIcons as Icon } from "@expo/vector-icons"
import Splash from "@/screens/Splash"

import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Platform } from "react-native"
import colors from "@/constants/colors"
import Settings from "@/screens/Settings"

const Stack = createStackNavigator<StackParamList>()
const Tab = createBottomTabNavigator()
const iconSize = 30

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={screenNames.Splash_screen}
    >
      <Stack.Screen name={screenNames.Splash_screen} component={Splash} />
      <Stack.Screen
        name={screenNames.User_container}
        component={UserContainer}
      />
      <Stack.Screen
        name={screenNames.Home}
        component={TabNav}
        options={Platform.OS === "ios" ? { gestureEnabled: false } : {}}
      />
      <Stack.Screen name={screenNames.Routine} component={RoutineList} />
      <Stack.Screen name={screenNames.Exercise} component={Exercise} />
      {/* <Stack.Screen
        name={screenNames.EXERCISE_COMPLETED}
        component={CompleteExercise}
      />

      <Stack.Screen
        name={screenNames.Routine_playlist}
        component={RoutinePlaylist}
      />
       */}
    </Stack.Navigator>
  )
}

const TabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: Platform.OS === "android" ? hp("8.2%") : hp("8.2%"),
          justifyContent: "center",
          paddingBottom: Platform.OS === "android" ? 10 : 15,
          backgroundColor: colors.secondary_container
        }
      }}
    >
      <Tab.Screen
        name={screenNames.Home}
        component={Home as any}
        options={{
          tabBarLabel: "",
          /*
          tabBarOptions: {
            activeTintColor: colors.app_Tint,
          },
          */
          tabBarIcon: tabInfo => {
            return (
              <Icon
                name="person"
                size={iconSize}
                color={
                  tabInfo.focused ? colors.app_Tint : colors.app_color_secondary
                }
                style={{ top: 10 }}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name={screenNames.List_exercise}
        component={ListExercise}
        options={{
          tabBarLabel: "",
          /*tabBarOptions: {
              activeTintColor: colors.app_Tint,
            },*/
          tabBarIcon: tabInfo => {
            return (
              <Icon
                name="format-list-bulleted"
                size={iconSize}
                color={
                  tabInfo.focused ? colors.app_Tint : colors.app_color_secondary
                }
                style={{ top: 10 }}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name={screenNames.Settings}
        component={Settings}
        options={{
          tabBarLabel: "",
          /*
          tabBarOptions: {
            activeTintColor: colors.app_Tint,
          },
          */
          tabBarIcon: tabInfo => {
            return (
              <Icon
                name="settings"
                size={iconSize}
                color={
                  tabInfo.focused ? colors.app_Tint : colors.app_color_secondary
                }
                style={{ top: 10 }}
              />
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default Navigation
