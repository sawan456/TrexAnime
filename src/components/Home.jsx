import React from 'react'
import Search from './Search'
import Movies from './Movies'
import Footer from './Footer.jsx'
import '../style/Home.css'

const Home = () => {

  return (
    <div className='app'>
      <Search/>
      <Movies/>
      <Footer/>
    </div>
  )
}

export default Home
