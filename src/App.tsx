import axios from "axios";
import { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const api_key = "03d7f3e68d02023a879dba217d018fff";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${api_key}`;

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-[700px] text-lg rounded-2xl shadow-md focus:outline-none"
          placeholder="Ville..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>

      <Weather weatherData={data} />
    </div>
  );
}

export default App;
