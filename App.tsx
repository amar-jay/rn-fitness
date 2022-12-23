import "react-native-gesture-handler"
import React from "react"
//import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from "react-redux"
import { store, persistor } from "@/store"

import { Platform, StatusBar } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import UserContainer from "@/screens/UserContainer"

import Home from "@/screens/Home"
import Exercise from "@/screens/Exercise"
import RoutineList from "@/screens/RoutineList"
import ListExercise from "@/screens/ListExercises"
/*
import Settings from '@/screens/Settings';
import RoutinePlaylist from '@/screens/RoutinePlaylist';
import CompleteExercise from '@/screens/CompleteExercise';
*/

import screenNames from "@/constants/navigation"
import { MaterialIcons as Icon } from "@expo/vector-icons"
import colors from "@/constants/colors"
import Splash from "@/screens/Splash"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"

const PersistGate = ({ children }: any) => <>{children}</>
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const iconSize = 30

const App = () => {
  return (
    <>
      {Platform.OS === "android" ? (
        <StatusBar
          backgroundColor={colors.solidWhite}
          barStyle="dark-content"
        />
      ) : null}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <HomeStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={screenNames.SPLASH_SCREEN}
    >
      <Stack.Screen name={screenNames.SPLASH_SCREEN} component={Splash} />
      <Stack.Screen
        name={screenNames.USER_CONTAINER}
        component={UserContainer}
      />
      <Stack.Screen
        name={screenNames.HOME}
        component={TabNav}
        options={Platform.OS === "ios" ? { gestureEnabled: false } : {}}
      />
      <Stack.Screen name={screenNames.ROUTINE} component={RoutineList} />
      <Stack.Screen name={screenNames.EXERCISE} component={Exercise} />
      {/* <Stack.Screen
        name={screenNames.EXERCISE_COMPLETED}
        component={CompleteExercise}
      />
      <Stack.Screen
        name={screenNames.ROUTINEPLAYLIST}
        component={RoutinePlaylist}
      /> */}
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
        name={screenNames.HOME}
        component={Home}
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
        name={screenNames.LIST_EXERCISE}
        component={
          //RoutineList
          ListExercise
        }
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
        name={screenNames.SETTINGS}
        component={
          Home
          //Exercise
        }
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

export default App
