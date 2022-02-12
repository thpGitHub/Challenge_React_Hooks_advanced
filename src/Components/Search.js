import {useState, useContext} from 'react'
import './Search.css'
//** react icons **/
import {IconContext} from 'react-icons'
import {MdImageSearch} from 'react-icons/md'
//** Contexts **/
import {ThemeContext} from '../Contexts/ThemeContext.js'
// ** img **
import {ReactComponent as SunLight} from '../Assets/sun-color.svg'
import {ReactComponent as SunDark} from '../Assets/sun-warm.svg'

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
        autoFocus
      />
      <IconContext.Provider value={{className: 'react-icons-search'}}>
        <button type="submit" className="search-button">
          <MdImageSearch />
        </button>
        <button
          onClick={toggleTheme}
          className={theme ? 'btn-toggle' : 'btn-toggle dark-btn'}
        >
          {theme ? (
            <SunLight data-testid="SunLight" />
          ) : (
            <SunDark data-testid="SunDark" />
          )}
        </button>
      </IconContext.Provider>
      {stateFetchPhotos.status === 'loading' && <span>⏳ Loading...</span>}
      {stateFetchPhotos.status === 'fail' && (
        <span>❌ {stateFetchPhotos.fail.message}</span>
      )}
    </form>
  )
}
