const defaultState = {
    cardCollection: []
  }
  
  // action {type: "", payload: ""}
export const cardReducer = (state = defaultState, action: { type: unknown; payload: object }) => { 
    switch (action.type) {
      case "ADD_CARD":
        return {...state, cardCollection: [...state.cardCollection, action.payload]}
      default:
        return state
    }
  }
  


