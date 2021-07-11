import React from "react";
import "weather-icons/css/weather-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"

const ApiKey='26b0e847f389677fd92173270241795c'


/*const Weather = ({cityAPI,countryAPI}) => {
    const [state,setState] = useState({city:undefined,country:undefined,temp:undefined,tempMin:undefined,tempMax:undefined,description:undefined})


    useEffect( ()=>{
        const apiCall =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${ApiKey}`);

        apiCall.then(response=>{ return response.json()}).then(response=>setState({city:response.name,
                                                                                country: response.sys.country,
                                                                                    temp:degreesInCel(response.main.temp),
                                                                                        tempMax: degreesInCel(response.main.temp_max),
                                                                                            tempMin: degreesInCel(response.main.temp_min),
                                                                                                description:response.weather[0].description}))

    })

    let degreesInCel = (kelvin) => {
        let cel = Math.floor(kelvin - 273.15)
        return cel
    }

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
}*/

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            city:undefined,country:undefined,temp:undefined,tempMin:undefined,tempMax:undefined,description:undefined
        }
        this.getWeather();
    }


    getWeather = () => {

        let geo = this.props.cityAPI + ',' + this.props.countryAPI

        const apiCall =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${geo}&appid=${ApiKey}`);

        apiCall.then(response=>{ return response.json()}).then(response=>this.setState({city:response.name,
            country: response.sys.country,
            temp:this.degreesInCel(response.main.temp),
            tempMax: this.degreesInCel(response.main.temp_max),
            tempMin: this.degreesInCel(response.main.temp_min),
            description:response.weather[0].description}))
debugger
    }

    degreesInCel= (kelvin) => {
        let cel = Math.floor(kelvin - 273.15)
        return cel
    }
    render() {
        return (
            <div className="container">
                {this.state.city},{this.state.country}
                <h5><i className="wi wi-day-sunny display-1"/></h5>
                {this.state.temp}&deg;<br/>
                {this.state.tempMin}&deg;
                {this.state.tempMax}&deg;
                {this.state.description}

            </div>
        )
    }
}

export default Weather