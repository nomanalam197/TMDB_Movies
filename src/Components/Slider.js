import Carousel from "react-bootstrap/Carousel";
import "../Stylesheets/Slider.css";
import { useState, useEffect} from "react";
import axios from "axios";

function CarouselFadeExample() {

  const [Movies, setMovies] = useState([]);
  // this below api shows all the movie details and has many pages
  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1");
      // console.log(data.results)
      setMovies(data.results);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div>
      <div className="textDiv">
        <h1>
          Welcome.
        </h1>
        <h4> Millions of movies, TV shows and people to discover. Explore
          now.</h4>
          {/* <div className="search"></div> */}
      </div>
      <Carousel>
      {Movies.slice(0,9).map((m) => (
        <Carousel.Item>
        <img
          className="d-block w-100 carousel-inner"
          src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
          alt="Third slide"
        /> 
      </Carousel.Item>        
      ))}
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
