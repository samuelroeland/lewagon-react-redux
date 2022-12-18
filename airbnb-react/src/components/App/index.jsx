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

const DEFAULT_CENTER = [2.3522, 48.884211]

const App = () => {
  const [flats, setFlats] = useState([])
  const [searchText, setSearchText] = useState('')
  const [selectedId, setSelectedId] = useState()
  const [center, setCenter] = useState(DEFAULT_CENTER)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setFlats(data))
  }, [])

  const handleSearch = (text) => {
    setSearchText(text)
  }

  const handleFlatSelect = (id) => {
    if (selectedId === id) {
      setSelectedId()
      setCenter(DEFAULT_CENTER)
    } else {
      const selectedFlat = flats.find((flat) => flat.id === id)
      const { lat, lng } = selectedFlat
      setCenter([lng, lat])
      setSelectedId(id)
    }
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
                onSelect={() => handleFlatSelect(flat.id)}
                selected={flat.id === selectedId}
              />
            )
          })}
        </div>
      </div>
      <div className="map">
        <Map
          zoom={[14]}
          center={center}
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
                selected={flat.id === selectedId}
              />
            )
          })}
        </Map>
      </div>
    </div>
  )
}

export default App
