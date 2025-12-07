import { useState } from 'react'
import './App.css'
import ProductoI from './ProductoI'

function Productos() {
  const [entrar, setEntrar] = useState(false)

  function Producto() {
    setEntrar(!entrar)
  }
  if (entrar) {
    return (
      <>
        <ProductoI />
      </>
    )
  }

  return (
    <>
      {/* Catálogo de productos */}

      <div class="colision">
        <h3>
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 1</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 2</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 3</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 4</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 5</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 6</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 7</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 8</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button onClick={Producto}>Producto 9</button>
        </h3>
      </div>

    </>
  );
}

export default Productos