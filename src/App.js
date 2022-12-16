import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
