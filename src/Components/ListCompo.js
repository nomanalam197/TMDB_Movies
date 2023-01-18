import React, { useEffect, useState } from 'react'
import '../Stylesheets/ListCompo.css'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


function LIstCompo() {
  const { what } = useParams();
  // console.log(what)
const [data , Setdata] = useState([])

  const api = `https://api.themoviedb.org/3/movie/${what.toLowerCase()}?api_key=a5c7cf95f924b3d8715b41a222a5c4a1&language=en-US&page=1`;

  const GetPopular = async () => {
    try{
      await axios.get(api).then((response) => {
        const { results } = response.data;
        Setdata(results)
      });
    } 
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    GetPopular()
  },[what])
// s
  let list = "... "
  if (data.length > 0) {
    list = data.map((m) => (
      <Link to={`/MovieFinder/${m.id}`}>
      <div className="popularListItem" style={{ height: '400px' ,width:"200px" }}>
      <div className="listImg">
        <img
          src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
          alt=""
          srcset=""
          style={{ borderRadious: '20px' }}
        />
      </div>
      <h6>{m.original_title ? m.original_title : m.original_name}</h6>
      <p>{m.release_date ? m.release_date : m.first_air_date}</p>
    </div>
    </Link>
    ));

    
  }


  return (
    <div className='ListCompo'>
      <h1 style={{ fontSize: "45px",textTransform: "capitalize" }}>{what}</h1>



     {list}


    </div>
  )
}

export default LIstCompo