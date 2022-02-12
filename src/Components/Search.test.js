import Search from '../Components/Search.js'
import {render, fireEvent, screen} from '@testing-library/react'
//** Contexts **/
// import {ThemeContext} from '../Contexts/ThemeContext.js'
import ThemeContextProvider from '../Contexts/ThemeContext.js'

it('Testing Search Component', async () => {
  // const {theme} = useContext(ThemeContext)
  const handleChangeQuery = changeQuery => {
    const changeQuery2 = changeQuery
  }
  const stateFetchPhotos = () => {
    const photo = 'photo'
  }
  render(
    <ThemeContextProvider>
      <Search
        onChangeQuery={handleChangeQuery}
        stateFetchPhotos={stateFetchPhotos}
      />
    </ThemeContextProvider>,
  )

  let element = screen.getByTestId('SunDark')
  expect(element.getAttribute('data-testid')).toBe('SunDark')

  fireEvent.click(element)

  element = screen.getByTestId('SunLight')
  expect(element.getAttribute('data-testid')).toBe('SunLight')
})
