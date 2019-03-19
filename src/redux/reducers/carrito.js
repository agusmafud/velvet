import { SUMAR_PRODUCTO, REMOVER_PRODUCTO, SUMAR_UNIDAD, RESTAR_UNIDAD, FIJAR_UNIDADES, VACIAR_CARRITO } from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case SUMAR_PRODUCTO: {
            const { id, ...otherProps } = action.payload.producto;            
            if (!!state.byIds[id]) {
                /* ITEM PRESENTE, ACTUALIZAR ITEM EN ESTADO */
                return {
                    ...state,
                    byIds: {
                        ...state.byIds,
                        [id]: {
                            ...state.byIds[id],
                            cantidad: ++state.byIds[id].cantidad
                        }
                    }
                };
            }
            else {
                /* AGREGAR ITEM A ESTADO CON CANTIDAD INICIAL */
                return {
                    ...state,
                    allIds: [...state.allIds, id],
                    byIds: {
                        ...state.byIds,
                        [id]: {                            
                            cantidad: 1,
                            ...otherProps
                        }
                    }
                };
            }            
        }

        case REMOVER_PRODUCTO: {
            const { id } = action.payload;                       
            if (!!state.byIds[id]) {                
                const newByIds = state.byIds;
                delete newByIds[id];
                const newAllIds = state.allIds.filter (item => item !== id);
                return {
                    ...state,
                    allIds: newAllIds,
                    byIds: newByIds,
                }                
            }
            /* ITEM NO PRESENTE, NO HACER NADA */
            else return state;
        }

        case SUMAR_UNIDAD: {
            const { id } = action.payload;            
            /* ACTUALIZAR ITEM EN ESTADO */
            if (!!state.byIds[id]) {                
                return {
                    ...state,
                    byIds: {
                        ...state.byIds,
                        [id]: {
                            ...state.byIds[id],
                            cantidad: ++state.byIds[id].cantidad
                        }
                    }
                };
            }
            /* DE NO ESTAR PRESENTE ITEM, QUE NO DEBERÍA SUCEDER, NO PERFORMAR ACCIÓN */
            else return state;                        
        }

        case RESTAR_UNIDAD: {
            const { id } = action.payload;                       
            if (!!state.byIds[id]) {
                if (state.byIds[id].cantidad === 1) {
                    /* ÚLTIMA UNIDAD, SE REMUEVE EL PRODUCTO */
                    const newByIds = state.byIds;
                    delete newByIds[id];
                    const newAllIds = state.allIds.filter (item => item !== id);
                    return {
                        ...state,
                        allIds: newAllIds,
                        byIds: newByIds,
                    }
                } 
                else return {
                    /* MÁS DE UNA UNIDAD, SE ACTUALIZA LA CANTIDAD */
                    ...state,
                    byIds: {
                        ...state.byIds,
                        [id]: {
                            ...state.byIds[id],
                            cantidad: --state.byIds[id].cantidad
                        }
                    }
                };
            }
            /* ITEM NO PRESENTE, NO HACER NADA */
            else return state;
        }

        case FIJAR_UNIDADES: {
            const { id, ...otherProps } = action.payload.producto;  
            const { nuevaCantidad } = action.payload;      
            
            if (!!state.byIds[id]) {
                /* ITEM PRESENTE */
                if (nuevaCantidad === 0) {
                    /* NUEVA CANTIDAD IGUAL A CERO, REMOVER PRODUCTO */
                    const newByIds = state.byIds;
                    delete newByIds[id];
                    const newAllIds = state.allIds.filter (item => item !== id);
                    return {
                        ...state,
                        allIds: newAllIds,
                        byIds: newByIds,
                    }
                } else {
                    /* ACTUALIZAR CANTIDAD */
                    return {
                        ...state,
                        byIds: {
                            ...state.byIds,
                            [id]: {
                                ...state.byIds[id],
                                cantidad: nuevaCantidad
                            }
                        }
                    }
                }
            }
            else {
                /* AGREGAR ITEM A ESTADO CON CANTIDAD INICIAL */
                return {
                    ...state,
                    allIds: [...state.allIds, id],
                    byIds: {
                        ...state.byIds,
                        [id]: {                            
                            cantidad: nuevaCantidad,                            
                            ...otherProps
                        }
                    }
                };
            }            
        }    
        
        case VACIAR_CARRITO: {            
            return {
                ...state,
                allIds: [],
                byIds: {}
            };                 
        }    

        default: return state;
    }
}
