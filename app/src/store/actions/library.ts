import actions from "../constants";

const routineLibrary = (routines: any) => {
  return async (dispatch: any) => {
    const data = await routines.map((x: any) => {
      return Object.values(x).flat();
    });

    dispatch({
      type: actions.SET_EXERCISE_LIBRARY,
      payload: data.flat()
    });
  };
};

export default {
  routineLibrary
};
