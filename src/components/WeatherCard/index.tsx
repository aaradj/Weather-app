// React Router Hooks
import { Link } from "react-router-dom";
// Material Ui Components
import { Grid } from "@mui/material"
// Styled Components
import { Degre, H2, Image, bgStyle } from "./cardStyle";
// Types
import { WeatherCardProps } from "../types";

function WeatherCard({main,name,sys,weather,icon}: WeatherCardProps) {

  const handleLink = (id:any, cityName:string) => {
    localStorage.clear();
    localStorage.setItem(id, cityName)
  }

    return(
        <Grid container item direction='column' gap='1.2rem' xs={12} sm={6} md={4} lg={2}  sx={bgStyle} padding='1rem'>
          <Grid item>
          <Link to='/details' onClick={() => handleLink(sys.id, name)}>
            <H2>{name}.{sys.country}</H2>
          </Link>
          </Grid>
          <Grid item>
            <Degre>{Math.round(main.temp)}°</Degre>
          </Grid>
          <Grid item>
            <figure>
              <Image className='city-icon' src={icon} alt={weather[0]["description"]} />
              <figcaption style={{alignItems:'center'}}>{weather[0]["description"]}</figcaption>
            </figure>
          </Grid>
        </Grid>
      )
}

export default WeatherCard