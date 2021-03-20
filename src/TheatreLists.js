import React from 'react';
import {theatreLists} from './sampleData';

const TheatreLists = (props) => {
  const filterTheatreLists = theatreLists.filter(e => e.movie.toUpperCase() === props.name.toUpperCase() && e.location.toUpperCase() === props.location.toUpperCase());
  const displayeLists = filterTheatreLists.map((filterTheatreList, index) => {
    return (
      <div className="theatre-list" key={index}>
        <p>Movie: {filterTheatreList.movie}</p>
        <p>Theatre: {filterTheatreList.theatre}</p>
        <p>Address: {filterTheatreList.theatreAdress}</p>
        <p>Contact: {filterTheatreList.theatreContactNo}</p>
        <p>Location: {filterTheatreList.location}</p>
      </div>
    )
  })
    return (
        <div className="theatre-lists">
          {displayeLists.length > 0 ?
           displayeLists : 
           <div className="errorMsg">Sorry! There are no shows running at your location.</div> }
        </div>
    );
};

export default TheatreLists;