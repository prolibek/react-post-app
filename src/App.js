import './App.css';
import TopNavbar from './components/UI/navbars/TopNavbar';
import AppRouter from './components/AppRouter';
import {BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/context';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setLoggedIn(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      loggedIn,
      setLoggedIn,
      loading
    }}>
      <BrowserRouter>
        <TopNavbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
