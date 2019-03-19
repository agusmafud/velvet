import { combineReducers } from "redux";

import pedidos from "./pedidos";
import pedidosUsuario from "./pedidosUsuario";
import carrito from "./carrito";
import productos from "./productos";
import msgFotter from "./msgFotter"
import usuario from "./usuario"
import direcciones from "./direcciones"
import newsletter from "./newsletter"

export default combineReducers({
    pedidos, pedidosUsuario, carrito, productos, msgFotter, usuario, direcciones, newsletter
});