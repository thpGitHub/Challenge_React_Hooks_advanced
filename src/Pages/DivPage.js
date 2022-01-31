import {useState, useContext} from 'react'
import './DivPage.css'
// ** Components **
import DivComponent from '../Components/DivComponent'
import Search from '../Components/Search'
//** Contexts **/
import {ThemeContext} from '../Contexts/ThemeContext.js'
// import ThemeContextProvider from '../Contexts/ThemeContext'
// ** Hooks **
import useDimension from '../Hooks/useDimension'
import useGenericFetchDatas from '../Hooks/useGenericFetchDatas'
// ** Services **
import photosService from '../Services/withClass/photosService'

// import {ErrorBoundary} from 'react-error-boundary';
// import {get8FirstPhotos} from '../Services/withFunctions/photosService'

export default function DivPages() {
  const [divsOrders, setDivsOrders] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [query, setQuery] = useState('orange')

  const {theme} = useContext(ThemeContext)

  // const stateFetchPhotos = useFindPhotosByQuery(query)
  const stateFetchPhotos = useGenericFetchDatas(
    query,
    photosService.get8FirstPhotos,
  )
  const browserWidth = useDimension()

  const handleChangeDivOrderLeft = indexDiv => {
    const divsOrders2 = [...divsOrders]
    const findIndexBefore = divsOrders2.indexOf(divsOrders2[indexDiv] - 1)

    divsOrders2[findIndexBefore] += 1
    divsOrders2[indexDiv] -= 1
    setDivsOrders(divsOrders2)
  }

  const handleChangeDivOrderRight = indexDiv => {
    const divsOrders2 = [...divsOrders]
    const findIndexAfter = divsOrders2.indexOf(divsOrders2[indexDiv] + 1)

    divsOrders2[findIndexAfter] -= 1
    divsOrders2[indexDiv] += 1
    setDivsOrders(divsOrders2)
  }

  const handleChangeDivOrderUp = (indexDiv, order) => {
    const divsOrders2 = [...divsOrders]

    /*
     * browser Width de 680px = 3 div / row
     */
    if (browserWidth >= 680) {
      switch (order) {
        case 4:
          const findIndexPos1 = divsOrders2.indexOf(1)
          divsOrders2[findIndexPos1] = 4
          divsOrders2[indexDiv] = 1
          setDivsOrders(divsOrders2)
          break
        case 5:
          const findIndexPos2 = divsOrders2.indexOf(2)
          divsOrders2[findIndexPos2] = 5
          divsOrders2[indexDiv] = 2
          setDivsOrders(divsOrders2)
          break
        case 6:
          const findIndexPos3 = divsOrders2.indexOf(3)
          divsOrders2[findIndexPos3] = 6
          divsOrders2[indexDiv] = 3
          setDivsOrders(divsOrders2)
          break
        case 7:
          const findIndexPos4 = divsOrders2.indexOf(4)
          divsOrders2[findIndexPos4] = 7
          divsOrders2[indexDiv] = 4
          setDivsOrders(divsOrders2)
          break
        case 8:
          const findIndexPos5 = divsOrders2.indexOf(5)
          divsOrders2[findIndexPos5] = 8
          divsOrders2[indexDiv] = 5
          setDivsOrders(divsOrders2)
          break
        case 9:
          const findIndexPos6 = divsOrders2.indexOf(6)
          divsOrders2[findIndexPos6] = 9
          divsOrders2[indexDiv] = 6
          setDivsOrders(divsOrders2)
          break
        default:
          console.log('no order')
      }
    }
    /*
     * browser Width beetwin 460px and 680 px = 2 div / row
     * last row 1 div only
     */
    if (browserWidth >= 460 && browserWidth < 680) {
      // console.log('460->6680')

      switch (order) {
        case 3:
          const findIndexPos1 = divsOrders2.indexOf(1)
          divsOrders2[findIndexPos1] = 3
          divsOrders2[indexDiv] = 1
          setDivsOrders(divsOrders2)
          break
        case 4:
          const findIndexPos2 = divsOrders2.indexOf(2)
          divsOrders2[findIndexPos2] = 4
          divsOrders2[indexDiv] = 2
          setDivsOrders(divsOrders2)
          break
        case 5:
          const findIndexPos3 = divsOrders2.indexOf(3)
          divsOrders2[findIndexPos3] = 5
          divsOrders2[indexDiv] = 3
          setDivsOrders(divsOrders2)
          break
        case 6:
          const findIndexPos4 = divsOrders2.indexOf(4)
          divsOrders2[findIndexPos4] = 6
          divsOrders2[indexDiv] = 4
          setDivsOrders(divsOrders2)
          break
        case 7:
          const findIndexPos5 = divsOrders2.indexOf(5)
          divsOrders2[findIndexPos5] = 7
          divsOrders2[indexDiv] = 5
          setDivsOrders(divsOrders2)
          break
        case 8:
          const findIndexPos6 = divsOrders2.indexOf(6)
          divsOrders2[findIndexPos6] = 8
          divsOrders2[indexDiv] = 6
          setDivsOrders(divsOrders2)
          break
        case 9:
          const findIndexPos8 = divsOrders2.indexOf(8)
          divsOrders2[findIndexPos8] = 9
          divsOrders2[indexDiv] = 8
          setDivsOrders(divsOrders2)
          break
        default:
          console.log('no order')
      }
    }
  }

  const handleChangeDivOrderDown = (indexDiv, order) => {
    const divsOrders2 = [...divsOrders]

    /*
     * browser Width de 680px = 3 div / row
     */
    if (browserWidth >= 680) {
      switch (order) {
        case 1:
          // console.log("4");
          const findIndexPos4 = divsOrders2.indexOf(4)
          divsOrders2[findIndexPos4] = 1
          divsOrders2[indexDiv] = 4
          setDivsOrders(divsOrders2)
          break
        case 2:
          // console.log("5");
          const findIndexPos5 = divsOrders2.indexOf(5)
          divsOrders2[findIndexPos5] = 2
          divsOrders2[indexDiv] = 5
          setDivsOrders(divsOrders2)
          break
        case 3:
          // console.log("6");
          const findIndexPos6 = divsOrders2.indexOf(6)
          divsOrders2[findIndexPos6] = 3
          divsOrders2[indexDiv] = 6
          setDivsOrders(divsOrders2)
          break
        case 4:
          // console.log("7");
          const findIndexPos7 = divsOrders2.indexOf(7)
          divsOrders2[findIndexPos7] = 4
          divsOrders2[indexDiv] = 7
          setDivsOrders(divsOrders2)
          break
        case 5:
          // console.log("8");
          const findIndexPos8 = divsOrders2.indexOf(8)
          divsOrders2[findIndexPos8] = 5
          divsOrders2[indexDiv] = 8
          setDivsOrders(divsOrders2)
          break
        case 6:
          // console.log("9");
          const findIndexPos9 = divsOrders2.indexOf(9)
          divsOrders2[findIndexPos9] = 6
          divsOrders2[indexDiv] = 9
          setDivsOrders(divsOrders2)
          break
        default:
          console.log('no order')
      }
    }

    if (browserWidth >= 460 && browserWidth < 680) {
      switch (order) {
        case 1:
          // console.log("4");
          const findIndexPos3 = divsOrders2.indexOf(3)
          divsOrders2[findIndexPos3] = 1
          divsOrders2[indexDiv] = 3
          setDivsOrders(divsOrders2)
          break
        case 2:
          // console.log("5");
          const findIndexPos4 = divsOrders2.indexOf(4)
          divsOrders2[findIndexPos4] = 2
          divsOrders2[indexDiv] = 4
          setDivsOrders(divsOrders2)
          break
        case 3:
          // console.log("6");
          const findIndexPos5 = divsOrders2.indexOf(5)
          divsOrders2[findIndexPos5] = 3
          divsOrders2[indexDiv] = 5
          setDivsOrders(divsOrders2)
          break
        case 4:
          // console.log("7");
          const findIndexPos6 = divsOrders2.indexOf(6)
          divsOrders2[findIndexPos6] = 4
          divsOrders2[indexDiv] = 6
          setDivsOrders(divsOrders2)
          break
        case 5:
          // console.log("8");
          const findIndexPos7 = divsOrders2.indexOf(7)
          divsOrders2[findIndexPos7] = 5
          divsOrders2[indexDiv] = 7
          setDivsOrders(divsOrders2)
          break
        case 6:
          // console.log("9");
          const findIndexPos8 = divsOrders2.indexOf(8)
          divsOrders2[findIndexPos8] = 6
          divsOrders2[indexDiv] = 8
          setDivsOrders(divsOrders2)
          break
        case 7:
          // console.log("9");
          const findIndexPos9 = divsOrders2.indexOf(9)
          divsOrders2[findIndexPos9] = 7
          divsOrders2[indexDiv] = 9
          setDivsOrders(divsOrders2)
          break
        case 8:
          // console.log("9");
          const findIndexPos9bis = divsOrders2.indexOf(9)
          divsOrders2[findIndexPos9bis] = 8
          divsOrders2[indexDiv] = 9
          setDivsOrders(divsOrders2)
          break
        default:
          console.log('no order')
      }
    }
  }

  const handleChangeQuery = changeQuery => {
    setQuery(changeQuery)
  }
  // const ErrorDisplay = ({ error }) => {
  //   return (
  //     <div style={{ color: "red" }}>
  //       Une erreur est survenue lors de la recherche
  //     </div>
  //   );
  // };

  const displayPhotos = (divOrder, index) => {
    if (stateFetchPhotos.datas) {
      /*
       * index < photos.length
       * Car le resultats du nombre de photo peut être inférieur à 9 photos
       * par ex. la recherche hh donne un result de 6 photos !
       */
      if (index < stateFetchPhotos.datas.length) {
        return (
          <DivComponent
            order={divOrder}
            indexDiv={index}
            key={index + 1}
            onChangeDivOrderLeft={handleChangeDivOrderLeft}
            onChangeDivOrderRight={handleChangeDivOrderRight}
            onChangeDivOrderUp={handleChangeDivOrderUp}
            onChangeDivOrderDown={handleChangeDivOrderDown}
            photo={stateFetchPhotos.datas}
            browserWidth={browserWidth}
          >
            élément {index + 1}
          </DivComponent>
        )
      }
    }
  }

  return (
    <>
      {/* <ThemeContextProvider> */}
      <Search
        onChangeQuery={handleChangeQuery}
        stateFetchPhotos={stateFetchPhotos}
      ></Search>
      {/* <Search onChangeQuery={handleChangeQuery} status={status}></Search> */}
      {/* <ErrorBoundary key={Math.random()} FallbackComponent={ErrorDisplay}> */}
      {/* <div id="container" className={theme ? '.light-container' : '.dark-container'}> */}
      <div
        className={
          theme ? 'container light-container' : 'container dark-container'
        }
      >
        {divsOrders.map((divOrder, index) => displayPhotos(divOrder, index))}
      </div>
      {/* </ErrorBoundary> */}
      {/* </ThemeContextProvider> */}
    </>
  )
}
