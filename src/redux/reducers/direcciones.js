import { NUEVA_DIRECCION, REMOVER_DIRECCION } from "../actionTypes";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case NUEVA_DIRECCION:            
            return [...state, action.payload];
        case REMOVER_DIRECCION:            
            const newDirecciones = state.filter (direccion => direccion !== action.payload);
            return newDirecciones;
        default:
            return state;
    }
};