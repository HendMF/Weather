import "./weatherCard.css";
import { FaWind } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi";
import { TiWeatherPartlySunny } from "react-icons/ti";
function WeatherCard({ data }) {
    console.log(data);
    return <>
        <div className="weatherInfo">
            <span className="weatherIcon">
                <TiWeatherPartlySunny />
            </span>
            <h3 className="deg">{data.temp}</h3>
            <p className="city">{data.name}</p>
            <div className="additional">
                <div className="humidity">
                    <span className="icon">
                        <WiHumidity />
                    </span>
                    <div className="humInfo">
                        <h5>{data.humidity}%</h5>
                        <h5>Humidity</h5>

                    </div>
                </div>
                <div className="speed">
                    <span className="icon">
                        <FaWind />
                    </span>
                    <div className="speedInfo">
                        <h5>{data.speed}</h5>
                        <h5>Speed</h5>


                    </div>
                </div>
            </div>
        </div>

    </>;
}

export default WeatherCard;