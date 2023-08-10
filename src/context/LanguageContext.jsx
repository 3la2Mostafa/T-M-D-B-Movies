import { createContext, useContext, useReducer } from 'react'

export const LanguageContext = createContext(null)
export const LanguageDispatchContext = createContext(null)

export function LanguageProvider({ children }) {
  const [langauge, dispatch] = useReducer(languageReducer, 'English')

  return (
    <LanguageContext.Provider value={langauge}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  )
}

function languageReducer(language, action) {
  switch (action.type) {
    case 'change': {
      return (language = action.payload)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useLanguageDispatch() {
  return useContext(LanguageDispatchContext)
}
