const get8FirstPhotos = query => {
  return fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=TI96M4j8W_9hTLmsq2t883On8hdZx6cHKAoA_eBIJrE&per_page=9`,
  )
    .then(response => response.json())
    .catch(error => {
      //   console.log('error message in photService ===', error.message)
      return Promise.reject(new Error(error.message))
    })
}
export {get8FirstPhotos}
