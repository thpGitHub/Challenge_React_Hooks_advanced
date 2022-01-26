import {useState} from 'react'
import './Search.css'
import {IconContext} from 'react-icons'
import {MdImageSearch} from 'react-icons/md'

export default function Search({onChangeQuery, stateFetchPhotos}) {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
    console.log('status in search component ===', stateFetchPhotos)
  }

  const handleChangeQuery = e => {
    e.preventDefault()
    if (searchInput !== '') {
      onChangeQuery(searchInput)
      setSearchInput('')
    }
  }

  return (
    <form className="search-container" onSubmit={handleChangeQuery}>
      <input
        type="search"
        className="search-input"
        placeholder=" Search Photos ...."
        onChange={handleChange}
        value={searchInput}
      />
      <IconContext.Provider value={{className: 'react-icons-search'}}>
        <button type="submit" className="search-button">
          <MdImageSearch />
        </button>
      </IconContext.Provider>
      {stateFetchPhotos.status === 'loading' && <span>⏳ Loading...</span>}
      {stateFetchPhotos.status === 'fail' && (
        <span>❌ {stateFetchPhotos.fail.message}</span>
      )}
      {console.log('status fail ===', stateFetchPhotos.fail)}
    </form>
  )
}
