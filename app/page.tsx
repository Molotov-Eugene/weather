"use client";

import React, { useState } from "react";
import axios from "axios";
import routes from "./routes";
import Input from "./components/Input";
import Current from "./components/Current";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const url = routes.getDataUrl(location);

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      try {
        const response = await axios.get(url);
        if (response.statusText !== 'OK') {
          throw new Error('new error');
        }
        const data = await response.data;
        setData(data);
        setLocation('')
        setError('')
        // console.log(data)
      } catch (error) {
        // console.warn(error)
        setError('City Not Found')
        setData({})
      }
    }
  }

  let content;
  if (Object.keys(data).length === 0 && error === '') {
    content = <div>
      <h2>Welcome to the Weather App</h2>
    </div>
  } else if (error !== '') {
    content = <div><p>{error}</p><p>Enter a Valid City</p></div>;
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    )
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-sky-900 to-sky-700 h-fit">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        {/* INPUT AND LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-sky-200 py-2 px-4 rounded-xl italic font-bold">
            Weather App
          </h1>
        </div>
        {content}
      </div>
    </div>
  )
}

export default Home;
