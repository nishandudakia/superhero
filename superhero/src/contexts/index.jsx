import React, { useState, useContext, createContext } from 'react'

const SearchContext = createContext()

export const SearchProvider = ({children}) => {
    const [hero, setHero] = useState([])
    return (
        <SearchContext.Provider value={{ hero, setHero}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext);