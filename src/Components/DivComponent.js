import {useState, useEffect} from 'react'
import './DivComponent.css'
import {IconContext} from 'react-icons'
// ** components
import DivButton from './DivButton'

export default function DivComponent({
  order,
  indexDiv,
  onChangeDivOrderLeft,
  onChangeDivOrderRight,
  onChangeDivOrderUp,
  onChangeDivOrderDown,
  photo,
  browserWidth,
}) {
  const [photoDiv, setPhotoDiv] = useState()

  useEffect(() => {
    if (photo === null || photo.length === 0) {
      return
    }
    // console.log('photo in useEffect DivComponent', photo)
    // console.log('photo lenght in useEffect DivComponent', photo.length)
    setPhotoDiv(photo)
  }, [photo])

  const handleDirection = direction => {
    switch (direction) {
      case 'left':
        onChangeDivOrderLeft(indexDiv)
        break
      case 'right':
        onChangeDivOrderRight(indexDiv)
        break
      case 'up':
        onChangeDivOrderUp(indexDiv, order)
        break
      case 'down':
        onChangeDivOrderDown(indexDiv, order)
        break
      default:
        console.log('no direction')
    }
  }

  const BrowserWidth = ({browserWidth, order}) => {
    return (
      <>
        {order === 1 && (
          // <>
          <DivButton
            handleDirection={handleDirection}
            direction="right"
            indexDiv={indexDiv}
            order={order}
          />
        )}
        {order > 1 && order < 9 && (
          <>
            <DivButton
              handleDirection={handleDirection}
              direction="left"
              indexDiv={indexDiv}
              order={order}
            />
            <DivButton
              handleDirection={handleDirection}
              direction="right"
              indexDiv={indexDiv}
              order={order}
            />
          </>
        )}
        {order === 9 && (
          <DivButton
            handleDirection={handleDirection}
            direction="left"
            indexDiv={indexDiv}
            order={order}
          />
        )}

        {browserWidth >= 680 && order < 7 && (
          <DivButton
            handleDirection={handleDirection}
            direction="down"
            indexDiv={indexDiv}
            order={order}
          />
        )}
        {browserWidth >= 680 && order > 3 && order <= 9 && (
          <DivButton
            handleDirection={handleDirection}
            direction="up"
            indexDiv={indexDiv}
            order={order}
          />
        )}
        {browserWidth >= 460 && browserWidth < 680 && order < 9 && (
          <DivButton
            handleDirection={handleDirection}
            direction="down"
            indexDiv={indexDiv}
            order={order}
          />
        )}
        {browserWidth >= 460 && browserWidth < 680 && order > 2 && (
          <DivButton
            handleDirection={handleDirection}
            direction="up"
            indexDiv={indexDiv}
            order={order}
          />
        )}
      </>
    )
  }

  return (
    <div className="element" style={{order: order}}>
      {photoDiv ? (
        <img src={photoDiv[indexDiv].urls.small} alt="img" />
      ) : (
        'charging ....'
      )}

      <IconContext.Provider value={{className: 'react-icons'}}>
        {/* {browserWidth > 680 && ( */}
        <>
          <BrowserWidth browserWidth={browserWidth} order={order} />
        </>
      </IconContext.Provider>
    </div>
  )
}
