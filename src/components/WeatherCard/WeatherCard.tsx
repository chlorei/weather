import s from './WeatherCard.module.css'

const WeatherCard = () => {

  return (
    <div className={s.card}>
        <div className={s.title}>
            Hamburg
        </div>
        <div className={s.picture}>
            <img src="/src/img/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg" alt="pic" />
        </div>
        <div className={s.grad}>
          22 &deg;C
        </div>
        <div className={s.description}>
          partly cloudy
        </div>
    </div>
  )
}

export default WeatherCard
