export default function fetchDatasReducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {status: 'loading', datas: null, fail: null}
    case 'done':
      return {status: 'done', datas: action.payload, fail: null}
    case 'fail':
      return {status: 'fail', datas: null, fail: action.error}

    default:
      throw new Error('Action non supporté')
  }
  //   }
}
