import React, { useEffect, useState } from 'react'
import './WeatherR.css'
import NavHead from '../navhead/NavHead'
import ShortTextIcon from '@mui/icons-material/ShortText';
import SearchIcon from '@mui/icons-material/Search';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import Data from '../Data';

const WeatherR = ({onReceive}) => {
    const [open , setOpen] = useState(false)
    const [inputValue,setInputValue] = useState('New Delhi')
    const [weatherData, setWeatherData] = useState([]);
    const [error,setError] = useState(null)

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const sendData = () => {
        onReceive(inputValue);
    };

    const handleOpen = () => setOpen(!open)
    let api_key = "4e3a55bd81316b35b29b57d4ee4ea850";

    useEffect(() => {
        const fetchData = async() => {
            setError(false)
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=${api_key}`)
                const data = await response.json()
                setWeatherData(data)
                sendData()
            }catch(err){
                setError('Something went wrong')
            }
        }
        if(inputValue){
            fetchData()
        }
    },[inputValue])
  return (
    <div className='weatherR-box'>
        {error && <p>{error}</p>}
        <NavHead color='black'/>
        <div className='weather-wrap'>
            <div className='wr-container'>
                <div>
                    <span><ShortTextIcon /></span>
                </div>
                <div className={`wr-search ${open ? "open" : "close"}`}>
                    <input type='search' placeholder='Search...' className='search-box' value = {inputValue} onChange={handleInputChange}/>
                    <span onClick={handleOpen} className='wr-icon'><SearchIcon /></span>
                </div>
            </div>
            {!weatherData ? (
                <p>Data Not Found</p>
                ) : (
                <>
                    <div className='weatherR-details'>
                        <div className='wr-description'>
                            <div className='wr-text'>
                                <span>{inputValue},</span>
                                <span>{weatherData?.sys?.country}</span>
                            </div>
                            <span>Oct 04,2019</span>
                            <div className='wr-cloud'>
                                <span><FilterDramaIcon /></span>
                                <span>{weatherData.weather && weatherData.weather[0]?.description}</span>
                            </div>
                        </div>
                        <div className='img-box'>
                            <button className='img-button'>Live</button>
                        </div>
                    </div>
                    <div className='weather-info'>
                        {Data.map((item,index) => (
                            <>
                                <div key = {index}>
                                    <div className='wi-data'>
                                        <span>{item.time}</span>
                                        <span>{item.imgSrc}</span>
                                        <span>{weatherData?.main?.temp}</span>
                                    </div>
                                </div>
                            </>
                        ))}  
                    </div>
                    <div className='weather-divider'></div>
                    <div className='weather-addInfo'>
                        <span className='additional-info'>Additional Info</span>
                        <div className='weather-info-container'>
                            <div className='weather-info-item'>
                                <span>Precipitation</span>
                                <span>{weatherData?.main?.feels_like}%</span>
                            </div>
                            <div className='weather-info-item'>
                                <span>Humidity</span>
                                <span>{weatherData?.main?.humidity}</span>
                            </div>
                            <div className='weather-info-item'>
                                <span>Windy</span>
                                <span>{weatherData?.wind?.speed}Km/h</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className='weather-divider weather-divider-bottom'></div>
        </div>
        <footer className='footer'>
            <div className='line'></div>
        </footer>
    </div>
  )
}

export default WeatherR