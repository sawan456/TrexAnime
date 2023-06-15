import React from 'react'
import Home from './src/components/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SingleMovie from './src/components/SingleMovie'
import Error from './src/components/Error'
import WishList from './src/components/WishList'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='wishlist' element={<WishList/>} />
          <Route path='movie/:id' element={<SingleMovie/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
