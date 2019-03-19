
export const getCarritoState = store => store.carrito;

export const getCarritoItemList = store =>
  getCarritoState(store) ? getCarritoState(store).allIds : [];

/* CARRITO */
export const getCarritoById = (store, id) =>
  getCarritoState(store) ? { ...getCarritoState(store).byIds[id], id } : {};

export const getCarrito = store =>
  getCarritoItemList(store).map(id => getCarritoById(store, id));


  /* PRODUCTOS */
export const getProductos = store => store.productos;


/* MENSAJE PRODUCTO AGREGADO */
export const getMensaje = store => store.msgFotter.mensaje;
export const getShowMensaje = store => store.msgFotter.show;


/* PEDIDOS */
export const getPedidosState = store => store.pedidos ? store.pedidos : [];

export const getPedidos = store => 
  Object.keys(getPedidosState(store)).map(
    id => ( composePedido(getPedidosState(store)[id],id) )
  );    
export const composePedido = (pedido, id) =>
  pedido ? { ...pedido, id } : {};


/* PEDIDOS USUARIO */
export const getPedidosUsuarioState = store => store.pedidosUsuario ? store.pedidosUsuario : [];

export const getPedidosUsuarioItemList = store =>
  getPedidosUsuarioState(store) ? getPedidosUsuarioState(store).allIds : [];

export const getPedidoUsuarioById = (store, id) =>
  getPedidosUsuarioState(store) && !!(getPedidosUsuarioState(store).byIds[id]) ? 
    { ...getPedidosUsuarioState(store).byIds[id], id } : {};

export const getPedidosUsuario = store =>
  getPedidosUsuarioItemList(store).map(id => getPedidoUsuarioById(store, id));

/* USUARIO DIRECCIONES Y NEWSLETTER */
export const getUsuario = store => store.usuario;
export const getDirecciones = store => store.direcciones;
export const getNewsletter = store => store.newsletter;

