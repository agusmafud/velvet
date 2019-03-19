import { NUEVO_USUARIO } from "../actionTypes";

const initialState = {
    "name": '',
    "email": '',        
    "tel": '',    
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NUEVO_USUARIO:            
            return action.payload;
        default:
            return state;
    }
};