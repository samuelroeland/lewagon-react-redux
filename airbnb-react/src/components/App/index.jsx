import { useState, useEffect } from 'react'
import './App.scss'
import ReactMapBoxGl from 'react-mapbox-gl'
import Flat from '../Flat'
import FlatMarker from '../FlatMarker'
import Search from '../Search'

const Map = ReactMapBoxGl({
  accessToken:
    'pk.eyJ1Ijoic2FtdWVsdmR2IiwiYSI6ImNsYWI5amFrMzBhZWEzcW9hMDI2a3J3bHQifQ.h3RTJRCLz0xCrkKwbANWpg',
})

const API_URL =
  'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'

const App = () => {
  const [flats, setFlats] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setFlats(data))
  }, [])

  const handleSearch = (text) => {
    setSearchText(text)
  }

  // 'i' = case insensitive
  const filteredFlats = flats.filter((flat) =>
    flat.name.match(new RegExp(searchText, 'i')),
  )

  return (
    <div className="app">
      <div className="main">
        {/* <input className="search" /> */}
        <Search onSearch={handleSearch} />
        <div className="flats">
          {filteredFlats.map((flat) => {
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
      <div className="map">
        <Map
          zoom={[14]}
          center={[2.3522, 48.884211]}
          containerStyle={{ height: '80vh', width: '100%' }}
          style="mapbox://styles/mapbox/streets-v8"
        >
          {flats.map((flat) => {
            return (
              <FlatMarker
                key={flat.id}
                lat={flat.lat}
                lng={flat.lng}
                price={flat.price}
              />
            )
          })}
        </Map>
      </div>
    </div>
  )
}

export default App
