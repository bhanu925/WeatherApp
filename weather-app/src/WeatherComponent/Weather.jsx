import React , { useState} from 'react'
import axios from 'axios';
import './Weather.css';

export default function Weather() {
    // 2b2e2638200f4647a07143739241302

    const [ weatherData , setWeatherData] = useState(null);
    const [ city ,setCity ] = useState('');
    const [ loading , setLoading ] = useState(false);


    const ApiKEY ='2b2e2638200f4647a07143739241302'
    
        const fetchData = async()=>{
            setLoading(true);
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${ApiKEY}&q=${city}`);
                console.log(response.data);
                setWeatherData(response.data); 
                setLoading(false);
            } catch (error) {
                setLoading(false);
                alert("Failed to fetch weather data")
            }            
        }
                
    
  return (
    <div className='container'>
        <div className="search">
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter city name'/>
            <button onClick={fetchData}>Search</button>
        </div>
        {loading && <p>Loading data...</p>}
        {weatherData && <div className="weather-cards">            
                    <div className="weather-card">
                        <h3>Temperature</h3>
                        <p>{weatherData.current.temp_c}°C</p>
                    </div>

                    <div className="weather-card">
                        <h3>Humidity</h3>
                        <p>{weatherData.current.humidity}%</p>
                    </div>

                    <div className="weather-card">
                        <h3>Condition</h3>
                        <p>{weatherData.current.condition.text}</p>
                    </div>

                    <div className="weather-card">
                        <h3>Wind Speed</h3>
                        <p>{weatherData.current.wind_kph} kph</p>
                    </div>                 
        </div>}
        

    </div>
  )
}
