import {useReducer, useEffect} from 'react'
import fetchDatasReducer from '../Reducers/fetchDatasReducer'

export default function useGenericFetchDatas(query, fnFetch) {
  const [state, dispatch] = useReducer(fetchDatasReducer, {
    status: 'idle',
    datas: null,
    fail: null,
  })

  useEffect(() => {
    dispatch({type: 'loading'})

    // get8FirstPhotos(query)
    // PhotosService.get8FirstPhotos(query)
    fnFetch(query)
      .then(data => dispatch({type: 'done', payload: data.results}))
      .catch(error => dispatch({type: 'fail', error}))
  }, [query, fnFetch])

  return state
}
