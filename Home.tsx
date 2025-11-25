import React from 'react';
import PosterGrid from '../components/PosterGrid';
import { SAMPLE_CONTENT } from '../services/data';

export default function Home(){
  const trending = SAMPLE_CONTENT;
  return (
    <div className="container">
      <div className="hero">
        <div style={{flex:1}}>
          <h1 style={{margin:0}}>Welcome to StreamHub</h1>
          <p style={{color:'var(--muted)'}}>Browse trending movies and series.</p>
        </div>
      </div>

      <section>
        <h3>Trending</h3>
        <PosterGrid items={trending} />
      </section>
    </div>
  );
}
