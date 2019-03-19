import { FIJAR_UNIDADES, CERRAR_MENSAJE_FOTTER } from "../actionTypes";

const initialState = {
    mensaje: "",
    show: false
};

export default function(state = initialState, action) {
    switch (action.type) {
                
        case FIJAR_UNIDADES: {
            const { nombre } = action.payload.producto;  
            const { nuevaCantidad, previaCantidad } = action.payload;      
            let mensaje = "";                      
        
            if (previaCantidad === 0) {
                (nuevaCantidad === 1) ?
                    mensaje = `${nuevaCantidad} huevo ${nombre} agregado`
                :
                    mensaje = `${nuevaCantidad} huevos ${nombre} agregados`
                ;                                
            } else if (nuevaCantidad === 0) {
                (previaCantidad === 1) ?
                    mensaje = `Se quitó el huevo '${nombre}' del carrito de compras`
                :
                    mensaje = `Se quitaron los huevos '${nombre}' del carrito de compras`
                ;                
            } else if (nuevaCantidad > previaCantidad) {
                (nuevaCantidad - previaCantidad === 1) ?
                    mensaje = `Se sumó ${(nuevaCantidad - previaCantidad)} huevo '${nombre}'`
                :
                    mensaje = `Se sumaron ${(nuevaCantidad - previaCantidad)} huevos '${nombre}'`
                ;                
            } else if (nuevaCantidad < previaCantidad) {
                (previaCantidad - nuevaCantidad === 1) ?
                    mensaje = `Se quitó ${(previaCantidad - nuevaCantidad)} huevo '${nombre}'`
                :
                    mensaje = `Se quitaron ${(previaCantidad - nuevaCantidad)} huevos '${nombre}'`
                ;                                
            }
            else { mensaje= 'Carrito actualizado'}

            return {
                ...state,
                mensaje: `${mensaje}`,
                show: true
            }       
        }     
        
        case CERRAR_MENSAJE_FOTTER: {
            return {
                ...state,
                show: false
            }
        }

        default: return state;
    }
}
