import Login from "./components/login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./components/signUp";
import React from 'react'
import './App.css';
import DisplayDetails from "./components/displayDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicInfo from './components/add-new-property/basic-info/basic-info';
import PropertyDetails from './components/add-new-property/property-details/property-details';
import GeneralInfo from './components/add-new-property/general-info/general-info';
import LocationInfo from './components/add-new-property/location-info/location-info';
import Header from './components/add-new-property/header/header'

// import Addproperty from "./components/addProperty";
import PropertyDetails from "./components/displayDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/propertyDetails" element={<DisplayDetails/>}></Route>
        <Route path='/basic-info' element={ <BasicInfo/>} />
          {/* <Route path='/basic-info' element={ <BasicInfo/>} /> */}
        <Route path='/property-details' element={<PropertyDetails/> } />
        <Route path='/general-info' element={<GeneralInfo/> } />
        <Route path='/location-info' element={<LocationInfo/> } />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
