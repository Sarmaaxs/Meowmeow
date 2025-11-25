import React from 'react';
import PosterGrid from '../components/PosterGrid';
import { SAMPLE_CONTENT } from '../services/data';

export default function Series(){
  const series = SAMPLE_CONTENT.filter(i=>i.type==='series');
  return (
    <div className="container">
      <h2>Series</h2>
      <PosterGrid items={series} />
    </div>
  );
}
