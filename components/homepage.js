import React, { Fragment } from "react"
import { render } from "react-dom"
import styles from "../styles/components/homepage.css"

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"

class Homepage extends React.PureComponent {
  componentDidMount() {
    const { onMount } = this.props
    onMount()
  }

  handleSortChange = (e) => {
    const { onSortSelect } = this.props
    const sortValue = e.currentTarget.value
    onSortSelect(sortValue)
  }

  handleTileClick = (id) => {
    const { onMovieSelect } = this.props
    onMovieSelect(id)
  }

  handleYearChange = (e) => {
    const { onYearSelect } = this.props
    const year = e.currentTarget.value
    onYearSelect(year)
  }

  render() {
    const {
      movies,
      selectedMovie,
      selectedYear,
      sortValue,
      years,
    } = this.props

    return(
      <div className="homepage-component">
        <div className={ styles.heroContainer }>
          <div className={ selectedMovie.video ? styles.videoContainer : styles.imageContainer }>
            <img className={ styles.heroImage } src={ IMAGE_PATH + selectedMovie.poster_path } />
          </div>
          <div className={ styles.detailsContainer }>
            <h2>{ selectedMovie.title }</h2>
            <p>{ `User Rating: ${ selectedMovie.vote_average }/10` }</p>
            <p className={ styles.description }>{ selectedMovie.overview }</p>
          </div>
        </div>
        <div className={ styles.gridContainer }>
          <div className={ styles.movieGrid }>
            {
              movies.map((movie) => (
                <div
                  className={ styles.movieContainer }
                  key={ movie.id }
                  onClick={ () => this.handleTileClick(movie.id) }
                >
                  <img className={ styles.movieImage } src={ IMAGE_PATH + movie.poster_path } />
                  <p className={ styles.movieTitle }>{ movie.title }</p>
                </div>
              ))
            }
          </div>
          <div className={ styles.dropdownContainer }>
            <label className={ styles.selectLabel } htmlFor="year">Year</label>
            <div className={ styles.selectContainer }>
              <select
                id="year"
                onChange={ (e) => this.handleYearChange(e) }
                value={ selectedYear }
              >
                {
                  years.map((year) => (
                    <option key={ year } value={ year }>{ year }</option>
                  ))
                }
              </select>
            </div>
            <label className={ styles.selectLabel } htmlFor="sort">Sort by:</label>
            <div className={ styles.selectContainer }>
              <select
                id="sort"
                onChange={ (e) => this.handleSortChange(e) }
                value={ sortValue }
              >
                <option value=""></option>
                <option value="alphAsc">A -> Z</option>
                <option value="alphDesc">Z -> A</option>
                <option value="dateDesc">Date most recent</option>
                <option value="dateAsc">Date chronological</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Homepage.defaultProps = {
  movies: [],
  onMount: () => {},
  onMovieSelect: () => {},
  onSortSelect: () => {},
  onYearSelect: () => {},
  selectedMovie: {},
  selectedYear: 0,
  sortValue: "",
  years: [],
}

export default Homepage