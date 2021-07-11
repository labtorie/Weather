import React, {useEffect, useState} from "react";
import "weather-icons/css/weather-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"

const ApiKey='26b0e847f389677fd92173270241795c' //todo лучше вынести в отдельный конфиг вайл

const Weather = ({cityAPI, countryAPI}) => {

    const [state, setState] = useState({
        city: undefined,
        country: undefined,
        temp: undefined,
        tempMin: undefined,
        tempMax: undefined,
        description: undefined
    })

    async function getWeather() {
        let geo = [cityAPI, countryAPI].join(',')

        // todo эти методы лучше тоже отдельно в api
        const apiCall =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${geo}&appid=${ApiKey}&units=metric`);

        apiCall.then(response=>{ return response.json()}).then(response=>setState({
            city:response.name,
            country: response.sys.country,
            temp: response.main.temp,
            tempMax: response.main.temp_max,
            tempMin: response.main.temp_min,
            description: response.weather[0].description}))
    }

    useEffect(()=> {
        getWeather()
    }, [cityAPI, countryAPI])


    return (
        <div className="container">
            {state.city},{state.country}
            <h5><i className="wi wi-day-sunny display-1"/></h5>
            {state.temp}&deg;<br/>
            {state.tempMin}&deg;
            {state.tempMax}&deg;
            {state.description}

        </div>
    )
}

export default Weather
