import { SUMAR_PRODUCTO, REMOVER_PRODUCTO, SUMAR_UNIDAD, RESTAR_UNIDAD, FIJAR_UNIDADES, VACIAR_CARRITO,
    CERRAR_MENSAJE_FOTTER, 
    FETCH_PEDIDOS, GET_PEDIDO, SUMAR_PEDIDO,
    NUEVO_USUARIO, NUEVA_DIRECCION, REMOVER_DIRECCION, NUEVO_NEWSLETTER
} from './actionTypes';

import { pedidosRef, timestamp } from "../config/firebase";

export const sumarProducto = producto => ({
    type: SUMAR_PRODUCTO,
    payload: { producto }
});

export const removerProducto = id => ({
    type: REMOVER_PRODUCTO,
    payload: { id }
});

export const sumarUnidad = id => ({
    type: SUMAR_UNIDAD,
    payload: { id }
});

export const restarUnidad = id => ({
    type: RESTAR_UNIDAD,
    payload: { id }
});

export const fijarUnidades = (producto, nuevaCantidad, previaCantidad) => ({
    type: FIJAR_UNIDADES,
    payload: { producto, nuevaCantidad, previaCantidad }
});

export const vaciarCarrito = () => ({
    type: VACIAR_CARRITO,
    payload: {}
});

export const cerrarMensajeFotter = () => ({
    type: CERRAR_MENSAJE_FOTTER,
    payload: {}
});

export const sumarPedido = id => ({
    type: SUMAR_PEDIDO,
    payload: { id }
});


export const addPedido = newPedido => async dispatch => {
    let pedidoRef = pedidosRef.push();    
    let newPedidoTimestamp = {        
        timestamp: timestamp,
        ...newPedido
    };    
    pedidoRef.set(newPedidoTimestamp)
        .then(
            () => dispatch(sumarPedido(pedidoRef.key)),        
            error => console.log('Error Firebase')
        )
        .then( () => dispatch(getPedido(pedidoRef.key)) )
        .then( () => dispatch(vaciarCarrito()) )        
    return pedidoRef.key;    
};

export const updatePedido = (updatePedidoId, updates) => async dispatch => {    
    pedidosRef.child(updatePedidoId).update(updates).then(
        ok => console.log(`Pedido ${updatePedidoId} actualizado`),
        error => console.log('Error Firebase')
    );
};

export const fetchPedidos = () => async dispatch => {
    pedidosRef.orderByKey().on("value", snapshot => {
        dispatch({
            type: FETCH_PEDIDOS,
            payload: snapshot.val()
        });
    });
};

export const getPedido = pedidoRef => async dispatch => {
    pedidosRef.child(pedidoRef).on("value", snapshot => {        
        dispatch({
            type: GET_PEDIDO,
            payload: { id: pedidoRef, ...snapshot.val() }
        });
    });
};

export const nuevoUsuario = nuevoUsuario => ({
    type: NUEVO_USUARIO,
    payload: nuevoUsuario
});

export const nuevaDireccion = nuevaDireccion => ({
    type: NUEVA_DIRECCION,
    payload: nuevaDireccion
});

export const removerDireccion = direccionARemover => ({
    type: REMOVER_DIRECCION,
    payload: direccionARemover
});

export const nuevoNewsletter = nuevoNewsletter => ({
    type: NUEVO_NEWSLETTER,
    payload: nuevoNewsletter
});