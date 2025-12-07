import { useState } from 'react'
import './App.css'
import ProductoI from './ProductoI'

function Productos() {
const [Entrar, setEntrar] = useState(false)

  function Producto() {

    if (Entrar){
      alert ("Ok")
      setEntrar(true)
    };
  }
  if(Entrar){
    return<ProductoI/>
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
          <button>Producto 2</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button>Producto 3</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button>Producto 4</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button>Producto 5</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button>Producto 6</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button>Producto 7</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button>Producto 8</button>
          <br />
          <br />
          <input type="image" name="producto" id="producto" />
          <br />
          <button>Producto 9</button>
        </h3>
      </div>

    </>
  );
}

export default Productos