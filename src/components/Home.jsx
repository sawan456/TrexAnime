import React from 'react'
import Search from './Search'
import Movies from './Movies'
import Footer from './Footer.jsx'
import '../style/Home.css'
import { useAuth0 } from "@auth0/auth0-react";

import {Box} from '@mui/material';
import LogInPage from './LogInPage'

const Home = () => {

  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

  return (
    <div className='app'>
      {!user ? (<LogInPage/>) : 
      (
        <>
      <Search/>
      <Box style={{marginTop: "80px"}} >
        <Movies/>
      </Box>
      <Footer/>
      </>
      )}
      
    </div>
  )
}

export default Home
