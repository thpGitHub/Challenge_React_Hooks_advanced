import {useEffect, useReducer} from 'react'
import fetchPhotosReducer from '../Reducers/fetchPhotosReducer'
import PhotosService from '../Services/withClass/photosService'

export default function useFindPhotosByQuery(query) {
  const [stateFetchPhotos, dispatch] = useReducer(fetchPhotosReducer, {
    status: 'idle',
    photos: null,
    fail: null,
  })

  useEffect(() => {
    dispatch({type: 'loading'})

    // get8FirstPhotos(query)
    PhotosService.get8FirstPhotos(query)
      .then(data => dispatch({type: 'done', payload: data.results}))
      .catch(error => dispatch({type: 'fail', error}))
  }, [query])

  return stateFetchPhotos
}
