import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Stylesheets/DetailsN.css";


function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null)
  const [type, setType] = useState("movie")

  let api = `https://api.themoviedb.org/3/${type}/${id}?api_key=a5c7cf95f924b3d8715b41a222a5c4a1&language=en-US`


const getMovie = async () => {
  try {
    await axios.get(api).then((response) => {    
      setData(response.data)
    });   
    
  } catch (error) {
   console.log(error)
   if(data == null){
    setType("tv")
  }
  }
}

  useEffect(() => {
    getMovie()
  }, [type])
  



  let element = "......"

  if (data) {
    element = 
      <div className="Details">
      <img
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`}
        alt=""
        srcset=""
        className="backgroundImg"
      />
      <div className="blackCover">{id}</div>
      <div className="mainText">
        <div className="poster">
          <div id="firstImageDiv">
            <div id="secondImageDiv">
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
            alt=""
            srcset=""
            style={{ borderRadius: "10px" }}
          />
          </div>
          </div>
          <div className="textDivv">
            <h1>{data.original_title ? data.original_title:data.name}</h1>
            <p className="shortD">
              {data.release_date} ({data.original_language}) 
            </p>
            <p className="shortDD">{data.tagline}</p>
            <div className="overviewDiv">
              <h2>Overview</h2>
            <p>
              {data.overview}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>    
  }


  return (
    <>
    {element}
    </>
  );
}

export default Details;
