import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "../Stylesheets/DetailsN.css";

import axios from 'axios'

const Details = () => {
    const [Movie, setMovie] = useState(null)
    const {id } = useParams();
    // console.log(id);
    // this below api link is specific for specific Movie details
     const getDetails = async ()=>{
        try{
            const {data} = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US`);
                // console.log(data)
                setMovie(data);
        }catch(error){
            console.log(error);
        }
     }

     useEffect(()=>{
        getDetails();
     }, [id])
     let MovieDetails = 'Loading. . . '
     if(Movie){
        MovieDetails = (
            <div>
                <h1 className='h1-Box'>{Movie.original_title}</h1>
                {/* <h5>Adult: {{} ? Yes  : No}</h5> */}
                <h5 className='h5-Box'>Overview: {Movie.overview}</h5>
                <h5 className='h5-Box'>Original Language: {Movie.original_language}</h5>
                <h5 className='h5-Box'>Revenue: {Movie.revenue}</h5>

                <img src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`} alt={Movie.poster_path} height={200} />
            </div>
        )
     }
  return (
    <div>
        {MovieDetails}
    </div>
  )
}

export default Details