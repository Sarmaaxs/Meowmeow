import React from 'react';
import { useParams } from 'react-router-dom';
import { SAMPLE_CONTENT } from '../services/data';

export default function Movie(){
  const { id } = useParams();
  const item = SAMPLE_CONTENT.find(i=>String(i.id)===String(id));
  if(!item) return <div className="container"><h2>Not found</h2></div>;
  return (
    <div className="container">
      <h2>{item.title}</h2>
      <img src={item.poster || '/fallback.png'} style={{width:320,height:480,objectFit:'cover'}}/>
      <p style={{maxWidth:720,color:'var(--muted)'}}>Description placeholder. Replace with real data.</p>
    </div>
  );
}
