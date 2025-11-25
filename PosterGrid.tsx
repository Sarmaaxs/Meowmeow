import React from 'react';
import PosterCard from './PosterCard';
export default function PosterGrid({items}:{items:Array<any>}){
  return (
    <div className="poster-grid">
      {items.map((m:any)=> <PosterCard key={m.id} id={m.id} title={m.title} poster={m.poster} year={m.year} />)}
    </div>
  );
}
