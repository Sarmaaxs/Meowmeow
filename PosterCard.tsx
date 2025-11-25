import React from 'react';
import { Link } from 'react-router-dom';
type Props = { id:number|string; title:string; poster?:string; year?:string; hideIfMissing?:boolean };
export default function PosterCard({id,title,poster,year,hideIfMissing=true}:Props){
  const fixed = poster ? (poster.startsWith('//') ? 'https:'+poster : poster) : null;
  if(!fixed && hideIfMissing) return null;
  const img = fixed || '/fallback.png';
  return (
    <div className="poster-card">
      <Link to={`/movie/${id}`}>
        <img src={img} alt={title} onError={(e)=>{(e.target as HTMLImageElement).src='/fallback.png'}}/>
        <div className="poster-info">
          <div className="poster-title">{title}</div>
          {year && <div className="poster-meta">{year}</div>}
        </div>
      </Link>
    </div>
  );
}
