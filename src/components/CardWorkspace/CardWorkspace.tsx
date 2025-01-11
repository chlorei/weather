import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import s from './CardWorkspace.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'


const CardWorkspace = () => {
  type Card = {
    location: string;
    grad: string;
    description: string;
    id: number;
  };

  // const cards  = useSelector(state => state.card.cardCollection)
  const cards: Card[] = useSelector((state: RootState) => state.card.cardCollection);
  return (
    <div className={s.workspace}>
        {cards.map((card: Card) =>
          <WeatherCard key ={card.id} location={card.location} grad={card.grad} description={card.description}/>
        )}
    </div>
  )
}

export default CardWorkspace
