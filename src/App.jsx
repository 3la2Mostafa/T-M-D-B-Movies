import MovieDetails from './components/MovieDetails'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Modern-Footer'
import Favorites from './components/Favorites'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Home from './components/Home'
import Modal from './components/Modal'
import React from 'react'

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Modal" element={<Modal/>} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
