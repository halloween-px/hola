import * as types from './types';

const initStore = {
    items: {}
}

export const paramsReducer = (store = initStore, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_PARAMS:
            return {...store, items: payload}
    }
    return store;
} 