const defaultState = {
    cardCollection: [
      // {
      //   location: "Hamburg",
      //   grad: "22",
      //   description: "partly cloudly",
      //   id: 1
      // },
    ]
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
  


