import * as types from './types';

export const loadParamsInfo = () => async (dispatch) => {
    const res = await fetch('http://localhost:3001/params-info');
    const data = await res.json();
    dispatch({type: types.SET_PARAMS, payload: data.items})
}