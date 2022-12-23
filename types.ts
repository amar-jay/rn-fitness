
interface DispatchPropsFxn {
type: string,
payload: {}
}
type DispatchProps = DispatchPropsFxn | ((x:any) => void)

type Dispatch = (x: DispatchProps) => void
type Action = (data: {}) => (dispatch:Dispatch) => Promise<void>
type SetAction = (data: {}, x:any) => (dispatch:Dispatch, x:any) => Promise<void>

type Level = "beginner" | "intermediate" | "advance"
interface HomeData {
	id: `${number}`,
	routineDifficulty: Level,
	routineData: {
		routine_name: string,
		routine_level: Capitalize<Level>,
		routine_time: `${number}`
	},
	image: NodeRequire,
	color: `#${string}`
}

interface ButtonData {
	id: `${number}`,
	label: `${number}s`,
	value: number,
	selected: boolean
}