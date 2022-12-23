import * as types from './types';

const initStore = {
    items: [],
    item: null,
}

export const servicesReducer = (store = initStore, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.SET_SERVICES:
            return { ...store, items: payload }
        case types.SET_SERVICE:
            return { ...store, item: payload }
    }
    return store
}