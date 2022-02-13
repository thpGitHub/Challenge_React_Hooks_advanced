import Search from '../Components/Search.js'
import {render, fireEvent, screen} from '@testing-library/react'
//** Contexts **/
import ThemeContextProvider from '../Contexts/ThemeContext.js'

describe('Search Component', () => {
  // const SearchComponent = () => {
  //   const handleChangeQuery = changeQuery => {
  //     const fakeChangeQuery = changeQuery
  //   }
  //   const stateFetchPhotos = () => {
  //     const fakePhoto = 'photo'
  //   }
  //   render(
  //     <ThemeContextProvider>
  //       <Search
  //         onChangeQuery={handleChangeQuery}
  //         stateFetchPhotos={stateFetchPhotos}
  //       />
  //     </ThemeContextProvider>,
  //   )
  // }

  const SearchComponent = statePhotos => {
    const handleChangeQuery = changeQuery => {
      const fakeChangeQuery = changeQuery
    }
    const stateFetchPhotos = {
      status: statePhotos,
      fail: {
        Message: 'error',
      },
    }
    render(
      <ThemeContextProvider>
        <Search
          onChangeQuery={handleChangeQuery}
          stateFetchPhotos={stateFetchPhotos}
        />
      </ThemeContextProvider>,
    )
  }

  it('Should render without crashing', async () => {
    SearchComponent()
  })

  it('Should icone theme SunDark exist', async () => {
    SearchComponent()
    expect(screen.getByTestId('SunDark')).toBeTruthy()
  })

  it('Should change theme', async () => {
    SearchComponent()
    let element = screen.getByTestId('SunDark')

    fireEvent.click(element)

    element = screen.getByTestId('SunLight')
    expect(element.getAttribute('data-testid')).toBe('SunLight')
  })
  it('Should display ⏳ Loading...', async () => {
    SearchComponent('loading')

    const element = screen.getByTestId('Loading')
    expect(element.textContent).toBe('⏳ Loading...')
  })
  it('Should display ❌', async () => {
    SearchComponent('fail')

    const element = screen.getByTestId('Fail')
    expect(element.textContent).toMatch(/❌/)
  })
})
