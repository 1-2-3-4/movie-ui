import { connect } from "react-redux"
import Router from 'next/router'
import {
  fetchMovies,
  movieSelected,
  sortSelected,
} from "../redux/actions/homepage_actions"
import Homepage from "../components/homepage"

const mapStateToProps = (state) => {
  return {
    movies: state.homepage.movies,
    selectedMovie: state.homepage.selectedMovie,
    selectedYear: state.homepage.selectedYear,
    sortValue: state.homepage.sortValue,
    years: state.homepage.years,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => {
      dispatch(fetchMovies())
    },
    onMovieSelect: (id) => {
      dispatch(movieSelected(id))
    },
    onSortSelect: (sortValue) => {
      dispatch(sortSelected(sortValue))
    },
    onYearSelect: (year) => {
      Router.push(`/year/${year}`)
    },
  }
}

const HomepageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage)

export default HomepageContainer