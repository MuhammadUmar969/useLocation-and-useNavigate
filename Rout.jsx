import React from 'react'
import About from './About';
import Contact from './Contact';
import Services from './Services';
import User from './User';
import Errror from './Errror';
import { Route, Routes } from "react-router-dom"
import Menu from './Menu';

const Rout = () => {
  return (
    <>
    <Menu />
      <Routes>
        <Route exact path='/' Component={ () => <About name="About" />}/>
        <Route path='/services' Component={ () => <Services name="Services"/>}/>
        <Route path="/user/:fname/:lname" Component={User}/>
        <Route path='/contact' Component={Contact}/>
        <Route Component={Errror}/>
       </Routes>
    </>
  )
}

export default Rout;
