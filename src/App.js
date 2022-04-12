import React from 'react'
import YaziListesi from './components/YaziListesi'
import { Route, Routes } from 'react-router-dom'
import YaziDetayi from './components/YaziDetayi'
import YaziEkle from './components/YaziEkle'
import YaziDuzenle from './components/YaziDuzenle'


function App() {

  return (
    <div className="main_wrapper">
      <header>
      </header>
      <div className="ui raised very padded container segment">
        {/* <Route exact path='/' component={YaziListesi} /> */}
        <Routes>
          <Route path='/' element={<YaziListesi />} />
          <Route path='/posts/:id' exact element={<YaziDetayi />} />
          <Route path='/yaziekle/' element={<YaziEkle />} />
          <Route path='/posts/:id/edit' element={< YaziDuzenle />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
