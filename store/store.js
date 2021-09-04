// store.js
import React, { createContext, useContext, useReducer } from 'react';

// permet de générer le provider de l'app
const StoreContext = createContext();
const initialState = {
    favorites: [],
};
const reducer = (state, action) => {
    console.log('reducer',state)

    switch(action.type) {
        case "ADD":
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        case "DELETE":
            return {
               ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload.id)
            }
        default:
            return {
                state
            }
    }
}

// Contexte provider englobe toute l'app
// on passe le state et le dispatch via useReducer > reducer
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

// on utilise ce hook dans l'app pour accéder à dispatch et aux actions du reducer
export const useStore = () => useContext(StoreContext);
