import './App.css';
import WeatherFormContainer from "./components/weather-formContainer";
import WeatherContainer from "./components/weatherContainer";

function App() {
    return (
        <div className="App">
            <WeatherFormContainer/>
            <WeatherContainer/>
        </div>
    );
}

export default App;
