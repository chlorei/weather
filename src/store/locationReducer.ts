const defaultState = {
    location: ""
  }
  
  // action {type: "", payload: ""}
export const locationReducer = (state = defaultState, action: { type: unknown; payload: number }) => { 
    switch (action.type) {
      case "SEND_LOCATION":
        return {...state, location: action.payload};
      default:
        return state
    }
  }