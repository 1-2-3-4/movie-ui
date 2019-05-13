import {
  CURRENT_PAGE_CHANGED,
  MOVIE_FETCH_SUCCEEDED,
  MOVIE_SELECTED,
  SORT_SELECTED,
  YEAR_SELECTED,
} from "../actions/homepage_actions"
import {
  buildYearMap,
  findMovieById,
  sortMovies,
} from "../helpers/homepage_helpers"

const initialState = {
  movies: [],
  pathname: "",
  selectedMovie: {},
  selectedYear: new Date().getFullYear(),
  sortValue: "",
  years: buildYearMap(),
}

export default (state = initialState, action)  => {
  switch (action.type) {
    case CURRENT_PAGE_CHANGED:
      const year = action.pathname.split("/")
      return Object.assign({}, state, {
        pathname: action.pathname,
        selectedYear: year[year.length - 1],
      })
    case MOVIE_FETCH_SUCCEEDED:
      return Object.assign({}, state, {
        movies: action.data,
        selectedMovie: action.data[0],
      })
    case MOVIE_SELECTED:
      return Object.assign({}, state, {
        selectedMovie: findMovieById(action.id, state.movies),
      })
    case SORT_SELECTED:
      return Object.assign({}, state, {
        movies: sortMovies(action.sortValue, state.movies),
        sortValue: action.sortValue,
      })
    default:
      return state
  }
}