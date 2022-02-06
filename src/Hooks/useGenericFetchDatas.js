import {useReducer, useEffect} from 'react'
// ** Reducers **
import fetchDatasReducer from '../Reducers/fetchDatasReducer'

export default function useGenericFetchDatas(query, fnFetch) {
  const [state, dispatch] = useReducer(fetchDatasReducer, {
    status: 'idle',
    datas: null,
    fail: null,
  })
  /*
   * state.datas =
   * (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
   * state.datas[1].urls.small =
   * https://images.unsplash.com/photo-15898950........
   */
  useEffect(() => {
    dispatch({type: 'loading'})
    // console.log('state.datas', state.datas ? state.datas[1].urls.small : null)
    // get8FirstPhotos(query)
    // PhotosService.get8FirstPhotos(query)
    fnFetch(query)
      .then(data => {
        dispatch({type: 'done', payload: data.results})
      })
      .catch(error => dispatch({type: 'fail', error}))
  }, [query, fnFetch])

  return state
}
