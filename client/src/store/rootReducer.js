import { combineReducers } from "redux";


const itemsState = {
    items: [],
    loading: true
}



const itemsReducer = (state = itemsState, actions) => {
    switch (actions.type) {
        case 'items/get':
            return {
                ...state,
                items: actions.payload,
                loading: false
            }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    items : itemsReducer,
 })
 
 export default rootReducer