import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { useSelector } from 'react-redux';
import StartPage from './components/StartPage/StartPage';


function App() {
  const auth = useSelector(store => store.auth)
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<StartPage />}/>
        { auth.isAuth === true ?
        <Route path='/prifile' element={<StartPage />}/> :
        <Route path='/profile' element={<Profile />}/>
        }
      </Routes>
    </>


  );
}

export default App;
