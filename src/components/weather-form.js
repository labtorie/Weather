import React from "react";
import {useFormik} from "formik";

const WeatherForm = ({getWeatherOfCity}) => {

    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            city: '',
            country: ''
        },
        onSubmit: ({city, country}) => {
            getWeatherOfCity(city, country)
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" id="city" onChange={handleChange} value={values.city}/>
            <input type="text" name="country" id="country" onChange={handleChange} value={values.country}/>
            <button type="submit">Get Weather</button>
        </form>

    )
}

export default WeatherForm