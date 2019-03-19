import { FETCH_PEDIDOS } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PEDIDOS:            
            if (!action.payload) 
                return {};
            return action.payload;
        default:
            return state;
    }
};