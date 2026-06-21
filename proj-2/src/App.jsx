import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data.js'

export default function App() {
  const travelEntries = data.map((travelEntry) => {
    return (
      <Entry 
      img={travelEntry.img}
      title={travelEntry.title}
      country={travelEntry.country}
      googleMapsLink={travelEntry.googleMapsLink}
      dates={travelEntry.dates}
      text={travelEntry.text}

      />
    )
  })

  return (
    <>
      <Header /> 
      <main className="container">
        {travelEntries}
      </main>
    </>
  )
}


