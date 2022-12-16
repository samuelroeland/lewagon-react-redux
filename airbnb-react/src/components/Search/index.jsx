import './Search.scss'

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value)
  }

  return (
    <input
      className="Search"
      type="text"
      placeholder="Search Flats"
      onChange={handleChange}
    />
  )
}

export default Search
