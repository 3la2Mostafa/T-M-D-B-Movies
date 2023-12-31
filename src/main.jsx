import { LanguageProvider } from './context/LanguageContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import store from './redux/store/store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
)
