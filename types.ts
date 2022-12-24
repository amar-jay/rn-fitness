import { ParamListBase } from "@react-navigation/native"
import routines from "@/assets/data/routine"

export type Dict<T> = { [K: string]: T }

export interface SettingsData {
  image?: any
  description?: string
  name?: string
}

interface DispatchPropsFxn {
  type: string
  payload: {}
}

export type PayLoad = {}
type DispatchProps = DispatchPropsFxn | ((x: any) => void)

type Dispatch = (x: DispatchProps) => void
export type Action = (data: {}) => (dispatch: Dispatch) => Promise<void>
export type SetAction = (
  data: {},
  x: any
) => (dispatch: Dispatch, x: PayLoad | any) => Promise<void>

type Level = "beginner" | "intermediate" | "advance"
export interface HomeData {
  id: `${number}`
  routineDifficulty: Level
  routineData: {
    routine_name: string
    routine_level: Capitalize<Level>
    routine_time: `${number}`
    image: NodeRequire
    routine_description: string
  }
  image: NodeRequire
  color: `#${string}`
}

export interface ButtonData {
  id: `${number}`
  label: `${number}s`
  value: number
  selected: boolean
}
export interface StackParamList extends ParamListBase {
  HOME: undefined
  ROUTINE: { routineType: RoutineType }
  EXERCISE: {
    exImage: NodeRequire
    exColor: `#${string}`
    exName: string
    exDescription: string
  }
  DETAILS: { id: `${number}` }
  SETTINGS: undefined
  ROUTINE_PLAYLIST: { data: Routine }
  PROFILE: undefined
  LOGIN: undefined
}

<<<<<<< HEAD
interface ButtonData {
	id: `${number}`,
	label: `${number}s`,
	value: number,
	selected: boolean
}

type ScreenProps<T,DrawerProps, StackProps> = T extends string? CompositeScreenProps<DrawerScreenProps<DrawerProps, T>, NativeStackScreenProps<StackProps>>: never;
=======
export type RoutineType = keyof typeof routines[0]
export type Routine = typeof routines[0][RoutineType]
>>>>>>> 0c3b7c4636f7b41870ffe3deb4191c7e4cd53ba4
