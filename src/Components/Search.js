import {useState, useContext} from 'react'
import './Search.css'
//** react icons **/
import {IconContext} from 'react-icons'
import {MdImageSearch} from 'react-icons/md'
//** Contexts **/
import {ThemeContext} from '../Contexts/ThemeContext.js'
// ** img **
import sunLight from '../Assets/sun-color.png'
import sunDark from '../Assets/sun-warm.png'

export default function Search({onChangeQuery, stateFetchPhotos}) {
  const [searchInput, setSearchInput] = useState('')

  const {toggleTheme, theme} = useContext(ThemeContext)

  const handleChange = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
    // console.log('status in search component ===', stateFetchPhotos)
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
        <button
          onClick={toggleTheme}
          className={theme ? 'btn-toggle' : 'btn-toggle dark-btn'}
        >
          {/* {theme ? <h1>tutu</h1> : 2} */}
          {theme ? (
            <img
              src={sunLight}
              style={{width: '25px', height: '25px'}}
              alt="sun Light"
            />
          ) : (
            <img
              src={sunDark}
              style={{width: '25px', height: '25px'}}
              alt="sun dark"
            />
          )}
          {/* {theme ? 'LIGHT' : 'DARK'} */}
        </button>
      </IconContext.Provider>
      {stateFetchPhotos.status === 'loading' && <span>⏳ Loading...</span>}
      {stateFetchPhotos.status === 'fail' && (
        <span>❌ {stateFetchPhotos.fail.message}</span>
      )}
      {/* {console.log('status fail ===', stateFetchPhotos.fail)} */}
    </form>
  )
}
