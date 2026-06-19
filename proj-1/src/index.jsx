import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))
root.render (
     <MainPage /> 
    )


function MainPage () {
  return (
    <>  
    <Header /> 
    <Content /> 
    <footer> <small> © 2026 Laura Jane Maria development. All rights reserved. </small> </footer>
    </>

  )
}

function Header (){
  return (
    <>
    <header className="header"> 
      <img className="nav-logo" src="./src/assets/react-logo.png" width="40px" alt="react logo" />   
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing </li>
          <li className="nav-list-item">About </li>
          <li className="nav-list-item">Content </li>
        </ul>
      </nav>
    </header> 
    </> 
    )
}

function Content (){
  return (
    <>
    <h1> Fun Facts about React </h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100k stars on Github</li>
              <li>Is maintained by Meta</li>
              <li>Powers thousands of Enterprise apps including mobile apps</li>
          </ul>
    </>  
    )
}