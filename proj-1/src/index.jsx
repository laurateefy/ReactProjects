import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

const root = createRoot(document.getElementById('root'))
root.render (
     <App /> 
    )






