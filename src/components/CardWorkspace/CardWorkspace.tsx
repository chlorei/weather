import WeatherCard from "../WeatherCard/WeatherCard";
import s from "./CardWorkspace.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { WeatherCard as WeatherCardType } from "../../types/types"; 

const CardWorkspace = () => {
  const cards: WeatherCardType[] = useSelector((state: RootState) => state.card.cardCollection);

  return (
    <div className={s.workspace}>
      {cards.map((card) => (
        <WeatherCard
          key={card.id}
          id={card.id}
          location={card.location}
          grad={card.grad}
          description={card.description}
          currentTime={card.currentTime}
        />
      ))}
    </div>
  );
};

export default CardWorkspace;