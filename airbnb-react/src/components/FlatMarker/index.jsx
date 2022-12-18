import { Marker } from 'react-mapbox-gl'
import './FlatMarker.scss'

const FlatMarker = ({ lat, lng, price, selected }) => {
  const classes = selected ? 'marker selected' : 'marker'
  return (
    <Marker coordinates={[lng, lat]} anchor="bottom">
      <strong className={classes}>{price}</strong>
    </Marker>
  )
}
export default FlatMarker
