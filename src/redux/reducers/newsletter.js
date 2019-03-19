import { NUEVO_NEWSLETTER } from "../actionTypes";

const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case NUEVO_NEWSLETTER:            
            return action.payload;
        default:
            return state;
    }
};