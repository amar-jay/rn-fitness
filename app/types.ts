import { ParamListBase } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import routines from "@/assets/data/routine";
import React from "react";

export type Dict<T> = { [K: string]: T };

export interface SettingsData {
  icon?: React.ComponentProps<typeof Icon>["name"];
  description?: string;
  name: string;
}

interface DispatchPropsFxn {
  type: string;
  payload: {};
}

export type PayLoad = {};
type DispatchProps = DispatchPropsFxn | ((x: any) => void);

type Dispatch = (x: DispatchProps) => void;
export type Action = (data: {}) => (dispatch: Dispatch) => Promise<void>;
export type SetAction = (
  data: {},
  x: any
) => (dispatch: Dispatch, x: PayLoad | any) => Promise<void>;

type Level = "beginner" | "intermediate" | "advance";
export interface HomeData {
  id: `${number}`;
  routineDifficulty: Level;
  routineData: {
    routine_name: string;
    //    routine_level: Capitalize<Level>;
    routine_time: `${number}`;
    image: NodeRequire;
    routine_description: string;
  };
  image: NodeRequire;
  color: `#${string}`;
}

export interface ButtonData {
  id: `${number}`;
  label: `${number}s`;
  value: number;
  selected: boolean;
}
export interface StackParamList extends ParamListBase {
  HOME: { data: HomeData };
  ROUTINE: { routineType: RoutineType };
  EXERCISE: {
    exImage: NodeRequire;
    exColor: `#${string}`;
    exName: string;
    exDescription: string;
  };
  DETAILS: { id: `${number}` };
  SETTINGS: undefined;
  ROUTINE_PLAYLIST: { data: Routine };
  PROFILE: undefined;
  LOGIN: undefined;
  SIGNUP: undefined;
}

/*
type ScreenProps<T, DrawerProps, StackProps> = T extends string
  ? CompositeScreenProps<
      DrawerScreenProps<DrawerProps, T>,
      NativeStackScreenProps<StackProps>
    >
  : never;
*/
export type RoutineType = keyof typeof routines[0];
export type Routine = typeof routines[0][RoutineType];

export type Email = `${string}@${string}.${string}`;
