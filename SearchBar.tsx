import React from 'react';
export default function SearchBar({value,onChange,onSubmit}:{value:string,onChange:(v:string)=>void,onSubmit:()=>void}){
  return (
    <div className="search-bar">
      <input className="search-input" placeholder="Search movies, series..." value={value} onChange={e=>onChange(e.target.value)} />
      <button className="button" onClick={onSubmit}>Search</button>
    </div>
  );
}
