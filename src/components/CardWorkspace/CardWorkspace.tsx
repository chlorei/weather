import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import s from './CardWorkspace.module.css'


const CardWorkspace = () => {
  return (
    <div className={s.workspace}>
        <WeatherCard/>
        <WeatherCard/>
    </div>
  )
}

export default CardWorkspace
