// React Route Hooks
import { Link } from "react-router-dom";
// Styled Components
import { Box, H1, FlexContainer, FlexItem, H2, Image, Text } from "./cardDetailsStyle";
// Helper
import { Rounded } from "../../components/helper";

function CardDetails({sys,main,name,weather,icon}:any) {
  return (
  <Box>
    <Link to='/weather'>
        <H1>{name} {sys.country}</H1>
    </Link>
  <FlexContainer>
      <FlexItem>
    <H2>
    Highest temperature: <Text>{Rounded(main.temp_max)}°</Text>
    </H2>
    <H2>
    Lowest temperature:<Text>{Rounded(main.temp_min)}°</Text></H2>
    <H2>
    Temperature now: <Text>{Rounded(main.temp)}°</Text></H2>
    <H2>Humidity: <Text>{main.humidity}%</Text></H2>
      </FlexItem>
      <FlexItem style={{gap:'0'}}>
         <Image className='city-icon' src={icon} alt={weather[0]["description"]} />
         <H2>{weather[0]["description"]}</H2>
      </FlexItem>
    </FlexContainer>
    </Box>
  )
}

export default CardDetails