import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  let [city, setCity] = useState("");
  let [info, setInfo] = useState({});
  let url = "https://api.openweathermap.org/data/2.5/weather";
  let key = "4370e4822d907ccfe9671bf38326f24f";

  const getweatherinfo = async () => {
    let response = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
    };
    //console.log(result);
    setInfo(result);
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  let imageUrl;
  if (info.temp_max < 10) {
    imageUrl = "https://raventermiteandpestcontrol.com/wp-content/uploads/2019/12/32561431_l-1200x800.jpg";
  } else if (info.temp_max > 20) {
    imageUrl = "https://www.treehugger.com/thmb/emVFfdc5Dwzu-u531n2zOSyvkLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
  } else {
    imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzB-5gKV42zTzM5hrDhg4KhIpG_kl8lcDWyfgPwFk9lkW3CMQ1F5YFlRouYpxy5GYVkv4&usqp=CAU";
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h4>Weather App</h4>
            <input type="text" onChange={handleInputChange} />
            <br />
            <Button size="small" onClick={getweatherinfo} className="btn">Submit</Button>
            
          </Typography>
          <CardMedia
            sx={{ height: 140 }}
            
            image={imageUrl}
            title="Weather"
          />
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>
                <b>City</b>:{city}
              </li>
              <li>
                <b>Humidity</b>:{info.humidity}
              </li>
              <li>
                <b>Pressure</b>:{info.pressure}
              </li>
              <li>
                <b>Temp_max</b>:{info.temp_max}°C
              </li>
              <li>
                <b>Temp_min</b>:{info.temp_min}°C
              </li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default App;
