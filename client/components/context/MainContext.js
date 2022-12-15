import { createContext, useContext, useState, useReducer } from "react";
const MainContext = createContext();

const initStore = {
    services: [],
    service: null,
    teams: [],
}

const reducer = (store, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_SERVICES':
            return { ...store, services: payload }
        case 'SET_SERVICE':
            return { ...store, service: payload }
        case 'SET_TEAMS':
            return { ...store, teams: payload }
    }
    return store
}

export const MainProvaider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initStore);

    // SERVICES
    const loadServices = async () => {
        const res = await fetch('http://localhost:3001/services');
        const data = await res.json();
        dispatch({ type: 'SET_SERVICES', payload: data.items });
    }

    const loadService = async (serviceId) => {
        const res = await fetch(`http://localhost:3001/services/${serviceId}`);
        const data = await res.json();
        dispatch({ type: 'SET_SERVICE', payload: data.item })
    }

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
        loadServices, loadService,
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