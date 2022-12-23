import * as types from './types';

export const loadServices = () => async (dispatch) => {
    const res = await fetch('http://localhost:3001/services');
    const data = await res.json();
    dispatch({ type: types.SET_SERVICES, payload: data.items });
}

export const loadService = (serviceId) => async (dispatch) => {
    const res = await fetch(`http://localhost:3001/services/${serviceId}`);
    const data = await res.json();
    dispatch({ type: types.SET_SERVICE, payload: data.item })
}