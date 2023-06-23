import { createContext, useState } from "react";

type WeatherContextProps = {
    children:React.ReactNode;
}

export const weatherContext = createContext<any>(null);

function WeatherContextProvider({children}:WeatherContextProps) {
    const [data,setData] = useState<any>([]);
  return (
    <weatherContext.Provider value={{data, setData}}>{children}</weatherContext.Provider>
  )
}

export default WeatherContextProvider