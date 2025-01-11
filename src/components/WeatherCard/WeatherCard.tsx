import SVGSelector from '../../assets/SVGSelector'
import s from './WeatherCard.module.css'


const WeatherCard = (props : {location: string, description: string, grad: number, id: number}) => {
  return (
    <div className={s.card}>
        <div className={s.title}>
          {props.location}
        </div>
        <div className={s.picture}>
          <SVGSelector name={props.description}/>
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
