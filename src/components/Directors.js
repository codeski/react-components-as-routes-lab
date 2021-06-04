import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    // console.log(directors)
    return (  directors.map((director, index) => { 
          return (
            <div key={index}>
              <h3>Name: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ) )}
              </ul>
            </div>
          )
      }
    ))
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
