import s from './WeatherCard.module.css'


const WeatherCard = (props: unknown) => {

  return (
    <div className={s.card}>
        <div className={s.title}>
          {props.location}
        </div>
        <div className={s.picture}>
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg" alt="pic" />
        </div>
        <div className={s.grad}>
          {props.grad} &deg;C
        </div>
        <div className={s.description}>
          {props.description}
        </div>
    </div>
  )
}

export default WeatherCard
