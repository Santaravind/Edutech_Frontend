import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{Provider } from 'react-redux'
import { store } from './component/redux/store.js'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

//import { AuthContext } from './component/context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />  
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
