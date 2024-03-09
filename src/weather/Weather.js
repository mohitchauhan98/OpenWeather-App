import React, { useState } from 'react'
import './Weather.css'
import NavHead from '../navhead/NavHead'
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WeatherR from '../weatherR/WeatherR';

const Weather = () => {
  const [receiveInput,setReceiveInput] = useState({ location: ''})

  const handleReceive = (location) => {
    setReceiveInput({ location })
  }
  return (
    <>
        <div className='main-box'>
          <NavHead />
          <div className='weather-wrap'>
            <div className='weather-container'>
              <div><span><CloseIcon /></span></div>
              <div className='wc-button'>
                <button>Live</button>
              </div>
            </div>
            <div className='weather-content'>
              <span><LocationOnIcon /></span>
              <span>Current Location</span>
            </div>
            <div className='weather-text'>
              <span>{receiveInput.location}</span>
            </div>
          </div>
        </div>
        <WeatherR onReceive = {handleReceive}/>
    </>
  )
}

export default Weather