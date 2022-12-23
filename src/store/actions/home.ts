import actions from '../constants';
import homeData from '@/assets/data/home';

const getFeedData:Action = (data) => {
  return async (dispatch) => {
    dispatch({
      type: actions.GET_FEED_DATA,
      payload: data,
    });
  };
};

const setUserData:Action = (data) => {
  return async (dispatch) => {
    
    dispatch({
      type: actions.SET_USER_DATA,
      payload: data,
    });
    console.log('done')
  };
};

const setHomeData:SetAction = (selectID, routineDifficulty) => {
  return async (dispatch, getState) => {
    const filterFeedData = homeData.filter(
      (item: any) => item.routineDifficulty === routineDifficulty,
    );

    const subDataState = getState().home.subData;

    const filterSubData = subDataState.map((element:{id: number}) => {
      if (element.id == selectID) {
        return {...element, selected: true};
      } else {
        return {...element, selected: false};
      }
    });

    dispatch(getFeedData(filterFeedData));
    dispatch({
      type: actions.SET_SUBCATEGORY_DATA,
      payload: filterSubData,
    });
    dispatch({
      type: actions.SET_SELECT_ID,
      payload: selectID,
    });
  };
};

const resetCategoryData:Action = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.SET_SELECT_ID,
      payload: 0,
    });
    dispatch({
      type: actions.RESET_FEED_DATA,
      payload: true,
    });
  };
};

export const homeActions = {
  getFeedData,
  setHomeData,
  resetCategoryData,
  setUserData,
};