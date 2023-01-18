import React from "react";
import "../Stylesheets/Popular.css";
import axios from 'axios'
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Stylesheets/Box.css";

function Trending() {

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


  const [changeB, setchangeB] = useState('')

  const displayChange = () => {
    let newItem = "none";
    setchangeB(newItem)
  }

  const displayI = () => {
    let newItem = "initial";
    setchangeB(newItem)
  }

  return (
    <>
      <div className="Popular">
        <h1 className="text-center">What's Trending</h1>
      </div>
      <div className="popularList">
        {
          Movies.slice(0, 9).map((m) => (


            <div className="popularListItem">
              <div className="listImg">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
                  alt=""
                />
              </div>
              <Link onClick={displayI} className="Link" to={`/Detailsme/${m.id}`}> <h6>{m.original_title}</h6> </Link>
              <p>Release Date:  {m.release_date}</p>
            </div>

          ))
        }
      </div>

      <div className='Big-Box' style={{ display: changeB }}>
        <i onClick={displayChange} className="ri-close-line"> </i>
          <Outlet></Outlet>
      </div>
    </>
  );
}

export default Trending;
