type Props = {
    name: string;
  };


const SVGSelector = ({ name }: Props) => {
    switch (true) {
      case name.includes("clear sky"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/day.svg" alt="pic" />
        );
      case name.includes("clouds") && !name.includes("overcast clouds"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg" alt="pic" />
        );
      case name.includes("overcast clouds"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/cloudy.svg" alt="pic" />
        );
      case name.includes("light rain"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/rainy-4.svg" alt="pic" />
        );
      case name.includes("moderate rain"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/rainy-5.svg" alt="pic" />
        );
      case name.includes("heavy intensity rain") || 
        name.includes("very heavy rain") || 
        name.includes("extreme rain") || 
        name.includes("freezing rain"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/rainy-6.svg" alt="pic" />
        );
      case name.includes("light snow"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/snowy-1.svg" alt="pic" />
        );
      case name.includes("snow") && !name.includes("light snow"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/snowy-5.svg" alt="pic" />
        );
      case name.includes("thunderstorm"):
        return (
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/thunder.svg" alt="pic" />
        );
      case name.includes("mist") || 
        name.includes("smoke") || 
        name.includes("haze") || 
        name.includes("fog") || 
        name.includes("sand") || 
        name.includes("dust"):
     return (
       <img src="/src/img/amcharts_weather_icons_1.0.0/animated/cloudy.svg" alt="pic" />
     );
    default:
     return (
      <img src="/src/img/amcharts_weather_icons_1.0.0/animated/weather.svg" alt="pic" />
    );
    }
}

  export default SVGSelector;   