import React from "react";
import axios from "axios";
import factoryWithThrowingShims from "prop-types/factoryWithThrowingShims";
// import styles from "./App.module.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    // TODO: 영화 데이터 로딩
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "TODO: 영화 데이터 출력"}</div>;
  }
}

export default App;
