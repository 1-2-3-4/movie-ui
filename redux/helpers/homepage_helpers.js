export const buildYearMap = () => {
  const currentYear = new Date().getFullYear()
  const lowestYear = currentYear - 4 // movies from the past 5 years
  const yearMap = []
  for (let i = currentYear; i >= lowestYear; i--) {
    yearMap.push(i)
  }
  return yearMap
}

export const findMovieById = (id, movies) => (
  movies.filter((movie) => movie.id == id)[0]
)

export const sortMovies = (sortValue, movies) => {
  switch (sortValue) {
    case "alphAsc":
      return movies.sort((a,b) => {
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
        return 0
      })
    case "alphDesc":
      return movies.sort((a,b) => {
        if (a.title < b.title) return 1
        if (a.title > b.title) return -1
        return 0
      })
    case "dateDesc":
      return movies.sort((a,b) => {
        if (a.release_date < b.release_date) return 1
        if (a.release_date > b.release_date) return -1
        return 0
      })
    case "dateAsc":
      return movies.sort((a,b) => {
        if (a.release_date > b.release_date) return 1
        if (a.release_date < b.release_date) return -1
        return 0
      })
    default:
      return movies
  }
}