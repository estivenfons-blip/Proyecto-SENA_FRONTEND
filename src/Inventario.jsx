import { useEffect, useState } from 'react'
import './App.css'

function Inventario() {
  const [inventario, setInventario] = useState([])

  //Estados para registrar producto
  const [nombre, setNombre] = useState('')
  const [categoria, setCategoria] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [precio, setPrecio] = useState('')

  //Estados para actualizar stock
  const [idStock, setIdStock] = useState('')
  const [nuevaCantidad, setNuevaCantidad] = useState('')

  //Obtener todos los productos
  async function obtenerInventario() {
    const peticion = await fetch('http://localhost:3000/inventario', { credentials: 'include' })
    if (peticion.ok) {
      const respuesta = await peticion.json()
      setInventario(respuesta)
    }
  }

  //Registrar producto nuevo
  async function registrarProducto() {
    if (!nombre || !categoria || !cantidad || !precio) {
      alert("Por favor completa todos los campos")
      return
    }
    const peticion = await fetch(
      'http://localhost:3000/inventario?nombre=' + nombre +
      '&categoria=' + categoria +
      '&cantidad=' + cantidad +
      '&precio=' + precio,
      { credentials: 'include', method: 'POST' }
    )
    if (peticion.ok) {
      alert("Producto registrado correctamente")
      setNombre('')
      setCategoria('')
      setCantidad('')
      setPrecio('')
      obtenerInventario()
    } else {
      alert("No se pudo registrar el producto")
    }
  }

  //Eliminar producto
  async function eliminarProducto(id) {
    const peticion = await fetch(
      'http://localhost:3000/inventario?id=' + id,
      { credentials: 'include', method: 'DELETE' }
    )
    if (peticion.ok) {
      alert("Producto eliminado")
      obtenerInventario()
    } else {
      alert("No se pudo eliminar el producto")
    }
  }

  //Actualizar stock
  async function actualizarStock() {
    if (!idStock || !nuevaCantidad) {
      alert("Por favor ingresa el ID del producto y la nueva cantidad")
      return
    }
    const peticion = await fetch(
      'http://localhost:3000/inventario/stock?id=' + idStock +
      '&cantidad=' + nuevaCantidad,
      { credentials: 'include', method: 'PATCH' }
    )
    if (peticion.ok) {
      alert("Stock actualizado correctamente")
      setIdStock('')
      setNuevaCantidad('')
      obtenerInventario()
    } else {
      alert("No se pudo actualizar el stock")
    }
  }

  useEffect(() => {
    obtenerInventario()
  }, [])

  return (
    <>
      {/* Registrar producto */}
      <h1>Registrar Producto</h1>
      <input type="text" placeholder="Nombre del producto" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input type="text" placeholder="Categoría" value={categoria} onChange={e => setCategoria(e.target.value)} />
      <input type="number" placeholder="Cantidad" value={cantidad} onChange={e => setCantidad(e.target.value)} />
      <input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
      <button onClick={registrarProducto}>Registrar</button>
      <br /><br />

      {/* Actualizar stock */}
      <h1>Actualizar Stock</h1>
      <input type="number" placeholder="ID del producto" value={idStock} onChange={e => setIdStock(e.target.value)} />
      <input type="number" placeholder="Nueva cantidad" value={nuevaCantidad} onChange={e => setNuevaCantidad(e.target.value)} />
      <button onClick={actualizarStock}>Actualizar Stock</button>
      <br /><br />

      {/* Lista de inventario */}
      <h1>Inventario</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            inventario.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>{producto.cantidad}</td>
                <td>${producto.precio}</td>
                <td>
                  <button onClick={() => eliminarProducto(producto.id)}>X</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Inventario