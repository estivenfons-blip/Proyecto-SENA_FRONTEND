import { useState } from 'react'
import './App.css'
import Factura from './Factura';

function RealizarPedido() {
  const [facturar, setFacturar] = useState(false)

  function factura() {
    setFacturar(!facturar)
  }
  if (facturar) {
    return (
      <>
        <Factura />
      </>
    )
  }

  return (
    <>

      {/* Productos individuales */}
      <div class="colision">
        <h4>Carrito</h4>
        <h4 class="h4-1">Cantidad</h4>
        <h5>(Cant.) (Producto seleccionado)</h5>
        <h5 class="h5-1">X</h5>
        <h5>(Cant.) (Producto seleccionado)</h5>
        <h5 class="h5-1">X</h5>
        <h5 class="h5-2">Total: $$$$</h5>
        <button onClick={factura}>Pagar</button>
      </div>

    </>
  );
}

export default RealizarPedido