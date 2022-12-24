import { ColorHex } from "react-native-countdown-circle-timer"
import { Dict } from "types"

const colorss = {
  heading: "#8f909c",
  description: "#433835",
  app_color_primary: "#4f536c",
  app_color_secondary: "grey",
  app_Tint: "#585DDE",
  app_Tint_dark: "#979af7",
  primary_button: "#1dA6E0",
  subcategory_button: "#585DDE",
  subcat_button_text: "white",
  solidWhite: "white",
  homeBG: "#fcfcfc",
  secondary_container: "#F8F8F8",
  // card varkground should be a slate grey
  cardBG: "#f5f5f5"
} as Dict<ColorHex | string>

export const countdownColors = {
  0: "#585DDE",
  1: "#979af7",
  2: "#d9d9d9"
} as const

export default colorss
