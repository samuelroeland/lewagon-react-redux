import { useState, useEffect } from 'react'
import './App.scss'
import Flat from '../Flat'

const API_URL =
  'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'

const App = () => {
  const [flats, setFlats] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setFlats(data))
  }, [])

  console.log('I am rendering')

  return (
    <div className="app">
      <div className="main">
        <input className="search" />
        <div className="flats">
          {flats.map((flat) => {
            return (
              <Flat
                key={flat.id}
                name={flat.name}
                price={flat.price}
                imageUrl={flat.imageUrl}
              />
            )
          })}
        </div>
      </div>
      <div className="map"></div>
    </div>
  )
}

export default App
