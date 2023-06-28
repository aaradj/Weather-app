

function Rounded(num:number):number{
    const newNum = Math.round(num);
    return newNum
};

function RemoveDuplicates(weatherDataArray:Array<any>){
    const uniqueWeatherDataArray = weatherDataArray.filter(
        (data, index, self) =>
          index ===
          self.findIndex(
            (d) =>
              d.name === data.name &&
              JSON.stringify(d.main) === JSON.stringify(data.main)
          )
      ); 
      return uniqueWeatherDataArray
};

export { Rounded, RemoveDuplicates };