import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import PosterGrid from '../components/PosterGrid';
import { SAMPLE_CONTENT } from '../services/data';

export default function Search(){
  const [q,setQ] = useState('');
  const [results,setResults] = useState<any[]>([]);
  function doSearch(){
    const s = q.toLowerCase().trim();
    const r = SAMPLE_CONTENT.filter(i=> i.title.toLowerCase().includes(s));
    setResults(r);
  }
  return (
    <div className="container">
      <h2>Search</h2>
      <SearchBar value={q} onChange={setQ} onSubmit={doSearch} />
      <PosterGrid items={results} />
    </div>
  );
}
