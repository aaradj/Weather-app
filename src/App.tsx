import { useState } from "react"
// React Router Hooks
import { Routes , Route } from "react-router-dom";
// Route Component
import routes, {IRoute} from "./routes"
// Context
import FormContextProvider from "./components/contexts/FormContext";
import WeatherContextProvider from "./components/contexts/WeatherContext";

function App() {
  const [route,setRoute] = useState<IRoute[]>(routes);
  return (
    <>
    <WeatherContextProvider>
      <FormContextProvider>
      {
        route.map((item:IRoute)=>{
          return(
            <Routes key={item._id}>
              <Route element={<item.component/>} path={item.path} />
            </Routes>
          )
        })
      }
      </FormContextProvider>
      </WeatherContextProvider>
    </>
  )
}

export default App