
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=b041f351841208b327770822e82f858c`;

      axios.get(apiUrl)
        .then((Response) => {
          setData(Response.data);
          console.log(Response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="enter location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data.main?.temp}°C</h1>
          </div>
          <div className="descr">
            <p>{data.weather?.[0]?.description}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feelslike">
            <p className="bold">{data.main?.feels_like}°C</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.main?.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{data.wind?.speed} mph</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

