// Pages
import Signup from "./pages/Signup/index";
import WeatherDetails from "./pages/WeatherDetails";
import WeatherMain from "./pages/WeatherMain";

export interface IRoute {
    name:string;
    component:React.FunctionComponent;
    path:string;
    _id:number;
}


const routes:IRoute[] = [
    {
        name:'signup',
        component:Signup,
        path:'/',
        _id:1
    },
    {
        name:'weather',
        component:WeatherMain,
        path:'/weather',
        _id:2
    },
    {
        name:'weather details',
        component:WeatherDetails,
        path:'/details',
        _id:3
    },
];

export default routes;
