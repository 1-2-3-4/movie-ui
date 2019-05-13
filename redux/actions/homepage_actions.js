const API_KEY = "aa0ea741dcbdabdf6fd9953b60e629cf"

export const CURRENT_PAGE_CHANGED = "CURRENT_PAGE_CHANGED"
export const currentPageChanged = (pathname) => ({
  type: CURRENT_PAGE_CHANGED,
  pathname,
})

export const MOVIE_FETCH_STARTED = "MOVIE_FETCH_STARTED"
export const movieFetchStarted = () => ({
  type: MOVIE_FETCH_STARTED,
})

export const MOVIE_FETCH_FAILED = "MOVIE_FETCH_FAILED"
export const movieFetchFailed = (error) => ({
  type: MOVIE_FETCH_FAILED,
  error,
})

export const MOVIE_FETCH_SUCCEEDED = "MOVIE_FETCH_SUCCEEDED"
export const movieFetchSucceeded = (data) => ({
  type: MOVIE_FETCH_SUCCEEDED,
  data,
})

export const MOVIE_SELECTED = "MOVIE SELECTED"
export const movieSelected = (id) => ({
  type: MOVIE_SELECTED,
  id,
})

export const SORT_SELECTED = "SORT_SELECTED"
export const sortSelected = (sortValue) => ({
  type: SORT_SELECTED,
  sortValue,
})

export const fetchMovies = () => {
  return (dispatch, getState) => {
    dispatch(movieFetchStarted())
    const { selectedYear } = getState().homepage
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${selectedYear}`)
      .then((response) => response.json())
      .then((json) => dispatch(movieFetchSucceeded(json.results)))
      .catch((error) => dispatch(movieFetchFailed(error)))
  }
}