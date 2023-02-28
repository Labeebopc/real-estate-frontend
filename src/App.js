import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicInfo from './components/add-new-property/basic-info/basic-info';
import PropertyDetails from './components/add-new-property/property-details/property-details';
import GeneralInfo from './components/add-new-property/general-info/general-info';
import LocationInfo from './components/add-new-property/location-info/location-info';
import Header from './components/add-new-property/header/header'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={ <BasicInfo/>} />
          {/* <Route path='/basic-info' element={ <BasicInfo/>} /> */}
          <Route path='/property-details' element={<PropertyDetails/> } />
          <Route path='/general-info' element={<GeneralInfo/> } />
          <Route path='/location-info' element={<LocationInfo/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
