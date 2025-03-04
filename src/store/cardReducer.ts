import { WeatherCard } from "../types/types";

interface CardAction {
  type: string;
  payload: WeatherCard | WeatherCard[] | number; 
}

const defaultState = {
  cardCollection: [] as WeatherCard[], 
};

export const cardReducer = (state = defaultState, action: CardAction) => {
  switch (action.type) {
    case "SET_CARDS":
      return { 
        ...state, 
        cardCollection: Array.isArray(action.payload) ? action.payload : state.cardCollection 
      };

    case "ADD_CARD":
      return { 
        ...state, 
        cardCollection: [...state.cardCollection, action.payload as WeatherCard]
      };

    case "REMOVE_CARD":
      return {
        ...state,
        cardCollection: state.cardCollection.filter((card) => card.id !== action.payload),
      };

    default:
      return state;
  }
};
