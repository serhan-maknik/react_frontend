import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YaziListesi from './components/YaziListesi'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import YaziDetayi from './components/YaziDetayi'

function App() {

  return (
    <div className="main_wrapper">
      <header>
      </header>
      <div className="ui raised very padded container segment">
        {/* <Route exact path='/' component={YaziListesi} /> */}
        <Routes>
          <Route path='/' element={<YaziListesi />} />
          <Route path='/posts/:id' element={<YaziDetayi />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
