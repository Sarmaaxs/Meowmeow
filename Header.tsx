import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){
  const nav = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="logo"/>
        <strong>StreamHub</strong>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/search">Search</Link>
      </nav>
      <div style={{marginLeft:'auto'}}>
        <button className="button" onClick={()=>nav('/login')}>Sign in</button>
      </div>
    </header>
  );
}
