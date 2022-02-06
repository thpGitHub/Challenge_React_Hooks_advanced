import {createContext, useState} from 'react'

export const PhotosCacheContext = createContext()

const PhotosCacheContextProvider = props => {
  const [photosCache, setPhotosCache] = useState({})

  const addPhotosCache = (photos, query) => {
    setPhotosCache({...photosCache, [query]: photos})
  }
  /**
   * photosCache ex. =
   * {
   *  orange: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}],
   *  cars: [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}],....
   *  }
   */
  return (
    <PhotosCacheContext.Provider value={{photosCache, addPhotosCache}}>
      {props.children}
    </PhotosCacheContext.Provider>
  )
}

export default PhotosCacheContextProvider
