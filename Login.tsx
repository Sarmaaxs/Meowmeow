import React, {useState} from 'react';
export default function Login(){
  const [email,setEmail]=useState(''); const [pass,setPass]=useState('');
  function submit(e:any){ e.preventDefault(); alert('Demo login: no backend in this scaffold'); }
  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={submit} style={{maxWidth:360}}>
        <input className="search-input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="search-input" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} />
        <button className="button" style={{marginTop:10}}>Sign in</button>
      </form>
    </div>
  );
}
