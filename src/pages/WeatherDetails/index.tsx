import { useContext } from "react"
// React Route Hooks
import { useNavigate } from "react-router-dom";
// Context Api
import { weatherContext } from "../../components/contexts/WeatherContext"
// Authentication
import Authorize from "../../components/Auth";
// Styled Components
import { Container } from "./weatherDetailsStyle";
// Card Components
import CardDetails from "../../components/CardDetails";

function WeatherDetails() {

  const navigate = useNavigate();

  const {data} = useContext(weatherContext);
  return (
    <Authorize>
    <Container>
        {
          data.map((item:any, index:number)=> {
            console.log(item);
            const {main,name,sys,weather} = item;
            const icon=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            if(localStorage.getItem(item.sys.id)){
              return(
                <CardDetails key={index} main={main} name={name} sys={sys} weather={weather} icon={icon}/>
              )
            }else{
              navigate("/weather");
            }
          })
        }
    </Container>
    </Authorize>
  )
}

export default WeatherDetails