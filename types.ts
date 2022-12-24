import { CompositeScreenProps, ParamListBase } from "@react-navigation/native"
import { DrawerScreenProps } from "@react-navigation/drawer"
import screenNames from "@/constants/navigation"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import routines from "@/assets/data/routine"

export type Dict<T> = { [K: string]: T }
export type RoutineType = keyof typeof routines[0]

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
  }
  image: NodeRequire
  color: `#${string}`
}

interface ButtonData {
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
  PROFILE: undefined
  LOGIN: undefined
}
