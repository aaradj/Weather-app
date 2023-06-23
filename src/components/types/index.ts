export type WeatherContextProps = {
    children:React.ReactNode;
};
export type StateType = {
    loading:boolean;
    data:[] | Array<object>;
    error:'' | 'somthing went wrong!';
};

export type UpdateType = {
    type:'LOADING' | 'DATAFETCHFAILURE';
};

export type FetchSuccessType = {
    type:'DATAFETCHSUCCESS';
    payload:Array<object>;
};

export type ActionType  = UpdateType | FetchSuccessType;

export type WeatherContextType = {
    state:StateType;
    dispatch:React.DispatchWithoutAction;
};

export type FormContextProps = {
    children:React.ReactNode;
};

export type FormContextType = {
    value:ValueType;
    setValue:React.Dispatch<React.SetStateAction<ValueType>>;
};

export type ValueType = {
    username:string;
    password:string;
    isLoggedIn:boolean;
};

export type AuthCheckProps = {
    children:React.ReactNode;
};

export type PageLayoutProps = {
    children:React.ReactNode;
};

export type WeatherCardProps = {
    main:any;
    name:string;
    sys:any;
    weather:any;
    icon:string;
};
