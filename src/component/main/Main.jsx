import { useState } from "react";
import "./main.css";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import WeatherCard from "../weatherCard/WeatherCard";

function Main() {
    const [city, setCity] = useState("");
    const [data, setData] = useState("");
    const getWeather = () => {
        if (city !== "") {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a155a682ae591f1ed60608ab6d04cff`)
                .then(res => setData({
                    ...data, temp: res.data.main.temp,
                    name: res.data.name, humidity: res.data.main.humidity,
                    speed: res.data.wind.speed
                })).catch(err => { console.log(err) });
        }

    }
    return <>
        <div className="weatherCard">
            <div className="container">
                <form>
                    <input type="text" placeholder="Search for a city" onChange={(e) => setCity(e.target.value)} />
                    <span onClick={() => getWeather()}><FaSearch /></span>
                </form>
                <WeatherCard data={data} city={city} />
            </div>
        </div>

    </>;
}

export default Main;