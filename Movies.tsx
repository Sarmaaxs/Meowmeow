import React from 'react';
import PosterGrid from '../components/PosterGrid';
import { SAMPLE_CONTENT } from '../services/data';

export default function Movies(){
  const movies = SAMPLE_CONTENT.filter(i=>i.type==='movie');
  return (
    <div className="container">
      <h2>Movies</h2>
      <PosterGrid items={movies} />
    </div>
  );
}
