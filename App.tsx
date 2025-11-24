
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchPage from './pages/Search';
import Profile from './pages/Profile';
import Plans from './pages/Plans';
import Payment from './pages/Payment';
import Football from './pages/Football';
import Browse from './pages/Browse';
import Watchlist from './pages/Watchlist';
import ViewAll from './pages/ViewAll';
import EmailVerification from './pages/EmailVerification';
import SettingsPage from './pages/Settings';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
        {loading && <SplashScreen onFinish={() => setLoading(false)} />}
        
        <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/verify" element={<EmailVerification />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/plans" element={<Plans />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/football" element={<Football />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        
                        {/* New Browse Routes */}
                        <Route path="/movies" element={<Browse type="movie" />} />
                        <Route path="/tv" element={<Browse type="tv" />} />
                        <Route path="/new" element={<Browse type="new" />} />
                        <Route path="/list" element={<Watchlist />} />
                        
                        <Route path="/view-all/:category" element={<ViewAll />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    </>
  );
};

export default App;
