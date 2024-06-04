"use client"
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

const Weather = () => {
    const [icon, setIcon] = useState("")
    const [condition, setCondition] = useState("")
    const [city, setCity] = useState(null)
    const [region, setRegion] = useState(null)
    const [country, setCountry] = useState(null)
    const [temp, setTemp] = useState(null)
    const [humidity, setHumidity] = useState(null)

    const FetchWeather=async()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '18a6247cebmsh3bd40e0af16d8fcp10135cjsnc7b5c01059dc',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
         };        
        await fetch ('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', options)
            .then((Response)=>{
                return Response.json()
            })
            .then((data)=>{
                setIcon(data.current.condition.icon)
                setCondition(data.current.condition.text)
                setCity(data.location.name)
                setRegion(data.location.region)
                setCountry(data.location.country)
                setTemp(data.current.temp_c)
                setHumidity(data.current.humidity)
            })
            .catch((error)=>{
                console.log(error.message, "Error Occured")
            })
    }

    useEffect(()=>{
        FetchWeather();
    },[])

  return (
    <div className="text-white flex flex-col gap-4 justify-center items-center">
        <div className="flex ">
            <div className="bg-slate-800 mt-5 rounded-lg py-0.5 px-4 flex gap-2 items-center ">
                <GoDotFill color="blue" />
                <h2 className="text-sm">Live</h2>                        
            </div>   
        </div>
        <h1 className="text-2xl tablet:text-3xl laptop:text-4xl">Weather Update</h1>
        <p className="text-slate-100">{condition}</p>
        <img className="m-[-20px] mb-1" src={`https:${icon}`} alt="weather-icon" width={100} height={100} />
        <div className="flex gap-10">
            <div className="flex flex-col gap-1 items-center">
                <h4>City</h4>
                <p className="bg-slate-800 rounded-lg py-0.5 px-4 flex gap-2 items-center ">{city}</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
                <h4>Region</h4>
                <p className="bg-slate-800  rounded-lg py-0.5 px-4 flex gap-2 items-center ">{region}</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
                <h4>Country</h4>
                <p className="bg-slate-800  rounded-lg py-0.5 px-4 flex gap-2 items-center ">{country}</p>
            </div>
        </div>
        <div className="flex items-center py-3 mt-6 gap-6">
            <div className="flex gap-6">
                <p className="text-slate-500 ">Temp</p>
                <h1 className="text-3xl">{temp} <span className="text-3xl tablet:text-5xl text-slate-400">°C</span></h1>    
            </div>
            
            <div className="bg-blue-500 rounded-lg w-1 h-10 tablet:h-20" />

            <div className="flex gap-6">
                <h1 className="text-3xl">{humidity} <span className="text-3xl tablet:text-5xl text-slate-400">%</span></h1>
                <p className="text-slate-500 ">Humidity</p> 
            </div>  
        </div>
        
    </div>
  )
}

export default Weather