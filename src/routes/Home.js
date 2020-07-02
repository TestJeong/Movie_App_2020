import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({
      movies,
      isLoading: false,
    }); // movies : movies 라는 뜻. 즉 state에 있는 기본값 movies 안에 api로 받아온 movies 배열 리스트를 넣는다는 뜻
  };

  componentDidMount() {
    this.getMovies();
  } // render 된 즉후 실행됨.

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {" "}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"> Loading... </span>{" "}
          </div>
        ) : (
          <div className="movies">
            {" "}
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}{" "}
          </div>
        )}{" "}
      </section>
    );
  }
}

export default Home;
