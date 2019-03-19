import { SUMAR_PEDIDO, GET_PEDIDO } from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUMAR_PEDIDO:                 
            return {
                ...state,
                allIds: [action.payload.id, ...state.allIds],            
            };

        case GET_PEDIDO:                        
            const { id, ...otherProps } = action.payload;            
            /* ITEM REMOVIDO, ELIMINAR */
            if (!otherProps.email) {                
                const newByIds = state.byIds;
                const newAllIds = state.allIds.filter (item => item !== id);
                delete newByIds[id];               
                return {
                    ...state,          
                    allIds: newAllIds,          
                    byIds: newByIds,
                }                
            }
            /* ITEM CON DATA, PERSISTIR */
            else return {                
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        ...otherProps
                    }
                }                
            };

        default:
            return state;
    }
};