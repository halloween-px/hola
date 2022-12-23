import { createContext, useContext, useState, useReducer } from "react";
const MainContext = createContext();

const initStore = {
    teams: [],
}

const reducer = (store, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_TEAMS':
            return { ...store, teams: payload }
    }
    return store
}

export const MainProvaider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initStore);

    // TEAMS
    const loadTeams = (limit, skip) => {
        fetch(`http://localhost:3001/teams${limit ? `?limit=${limit}` : ''}${skip ? `&skip=${skip}` : ''}`)
            .then(res => res.json())
            .then(data => {
                dispatch({type: 'SET_TEAMS', payload: data.items})
            })
    }

    //ARTICLES
    const [articles, setArticles] = useState([]);
    const [countArticles, setCountArticles] = useState(0);
    const loadArticles = (limit, skip) => {
        fetch(`http://localhost:3001/articles${limit ? `?limit=${limit}` : ''}${skip ? `&skip=${skip}` : ''}`)
            .then(res => res.json())
            .then(data => {
                setArticles(data.items)
                setCountArticles(data.count)
            })
    }

    const [article, setArticle] = useState([]);
    const loadArticle = (articleId) => {
        fetch(`http://localhost:3001/articles/${articleId}`)
            .then(res => res.json())
            .then(data => {
                setArticle(data.item)
            })
    }

    //CATEGORIES
    const [categories, setCategories] = useState([]);

    const loadCategories = () => {
        fetch(`http://localhost:3001/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data.items)
            })
    }

    const value = {
        ...store,
        loadTeams,
        articles, loadArticles, article, loadArticle, countArticles,
        categories, loadCategories,
    }

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);