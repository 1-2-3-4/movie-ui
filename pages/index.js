import Head from "../components/head"
import Header from "../components/header"
import HomepageContainer from "../containers/homepage_container"
import Footer from "../components/footer"
import withRedux from "next-redux-wrapper"
import store from "../redux/store"
import styles from "../styles/pages/index.css"

const Home = () => (
  <div className="container">
    <Head title="Home" />
    <Header />
    <main>
      <HomepageContainer />
    </main>
    <Footer />
  </div>
)

Home.getInitialProps = async () => ({
  title: "Movie Database",
  description: "A database of movies",
})

export default withRedux(store)(Home)
