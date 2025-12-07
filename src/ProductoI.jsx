import { useState } from 'react'
import './App.css'
import RealizarPedido from './RealizarPedido'

function ProductoI() {
  const [pedido, setPedido] = useState(false)

  function realizarPedido() {
    setPedido(!pedido)
  }
  if (pedido) {
    return (
      <>
        <RealizarPedido />
      </>
    )
  }

  return (
    <>

      {/* Productos individuales */}
      <div class="colision">
        <input type="image" name="productoI" id="productoI" />
        <h3>Producto</h3>
        <br />
        <button onClick={realizarPedido}>Realizar Pedido</button>
      </div>

    </>
  );
}

export default ProductoI