import * as types from './types';

export const loadArticles = () => async (dispatch) => {
    const res = await fetch('http://localhost:3001/articles');
    const data = await res.json();
    dispatch({type: types.SET_ARTICLES, payload: data.items})
}