import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/Home'
import TinyUrl from './pages/TinyUrl'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="tinyurl" element={<TinyUrl />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App