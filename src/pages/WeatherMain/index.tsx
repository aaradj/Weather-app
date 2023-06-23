import { useState, useContext } from "react";
// Context Api
import { formContext } from "../../components/contexts/FormContext";
import { weatherContext } from "../../components/contexts/WeatherContext";
// Axios
import axios from "axios";
// Material Ui Components
import { TextField, Grid, Button } from "@mui/material"
// Layout Component
import PageLayout from "../../components/Layouts/PageLayout"
// Styled Component
import { CGrid } from "./weatherMainStyle";
// Card Component
import WeatherCard from "../../components/WeatherCard";
// Authentication
import Authorize from "../../components/Auth";

const allData:any = [];
const apiKey = '16be5034253e79ee7c3745dc69157f91';


function WeatherMain() {

  const [value,setValue] = useState('');
  const [error,setError] = useState<true | undefined>(undefined);

  const user = useContext(formContext);
  const {setData} = useContext(weatherContext);
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
  }

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`)
        .then(response=>{
              setError(undefined)
              allData.push(response.data)
              setData(allData);
              setValue('');
        })

        .catch(()=>{
          setError(true)
        })
      };

  return (
    <Authorize>
        <PageLayout>
            <Grid container direction='column'>
        <CGrid>
        <TextField variant="filled" color="error"  sx={{background:"white", borderRadius:'5px'}}  placeholder='Search City name' name="search" value={value} onChange={handleChange} error={error ? true : undefined}  />
        <Button onClick={handleClick} type="submit" variant="contained" color="error" sx={{padding:'.7rem 1rem'}}>Submit</Button>
        </CGrid>

        <Grid container item flexWrap='wrap' padding='3rem 0' gap='2rem' justifyContent='center'>

          {
            allData.map ((item:any, index:number) => {
              const {main,name,sys,weather}=item;
              const icon=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`; 
              return(
                <WeatherCard key={index} main={main} name={name} sys={sys} weather={weather} icon={icon} />
              )
            })
          }

        </Grid>

        </Grid>
      </PageLayout>

     </Authorize>
  )
}

export default WeatherMain