import actions from "../constants"
import buttonsData from "@/assets/data/settings"

const INITIAL_STATE = {
  soundInfo: true as boolean,
  pauseTimeOptions: buttonsData,
  userName: "anonymous",
  userAge: 18,
  userActive: 3,
  breakTime: 10
} as const

export type SettingsState = typeof INITIAL_STATE
const settings = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actions.SET_SOUND:
      return { ...state, soundInfo: action.payload }
    case actions.SET_PAUSE_TIME:
      return { ...state, pauseTimeOptions: action.payload }
    case actions.BREAK_TIME:
      return { ...state, breakTime: action.payload }
    default:
      return state
  }
}

export default settings
