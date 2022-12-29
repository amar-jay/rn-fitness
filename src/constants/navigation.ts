const screenNames = {
  Home: "HOME",
  Routine: "ROUTINE",
  Exercise: "EXERCISE",
  Settings: "SETTINGS",
  Homestack: "HOMESTACK",
  Routine_playlist: "ROUTINE_PLAYLIST",
  Exercise_completed: "EXERCISE_COMPLETED",
  Splash_screen: "SPLASH_SCREEN",
  User_container: "USER_CONTAINER",
  List_exercise: "LIST_EXERCISE",
  Login: "LOGIN",
  Signup: "SIGNUP",
  Analysis: "ANALYSIS"
} as const

//type ScreenNameKeys = Capitalize<keyof typeof screenNames>
//export type ScreenNames = Map<ScreenNameKeys, keyof typeof screenNames>
export default screenNames
export type ScreenNames = typeof screenNames
