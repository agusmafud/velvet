export const getMontoCarrito = (carrito) => {
    let monto = carrito.reduce( (acc, carritoItem) => {
        return (acc + (carritoItem.precio * carritoItem.cantidad))
    }, 0);
    return monto;
}

export const getUnidadesCarrito = (carrito) => {
    let unidades = carrito.reduce( (acc, carritoItem) => {
        return (acc + carritoItem.cantidad)
    }, 0);
    return unidades;
}

export const getCantidadCarrito = (carrito, id) => {
    let item = carrito.filter(carritoItem => carritoItem.id === id);
    if (item.length)
        return item[0].cantidad;
    return 0;
};

export const getCantidadCarritoUrl = (carrito, url) => {
    let item = carrito.filter(carritoItem => carritoItem.url === url);
    if (item.length)
        return item[0].cantidad;
    return 0;
};