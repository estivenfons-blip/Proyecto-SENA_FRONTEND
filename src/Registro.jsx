import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productos from './Productos'

function Registro({ recargarAhora }) {
  //Registro
  const [usuarioRegistro, setUsuarioRegistro] = useState('')
  const [claveRegistro, setClaveRegistro] = useState('')

  //Registro
  function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value)
  }
  function cambiarClaveRegistro(evento) {
    setClaveRegistro(evento.target.value)
  }

  //Registro
  async function registrar() {
    const peticion = await fetch('http://localhost:3000/registro?usuario=' + usuarioRegistro + '&clave=' + claveRegistro, { credentials: 'include' })
    if (peticion.ok) {
      alert("eyeyey Ahora Estás Registradooooo Papá")
      recargarAhora()
    } else {
      alert("Usuario no Registradoooo")
    }
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <h1>Registrar</h1>
      <input type="text" name="usuario" id="usuario" placeholder="Tú Usuairo" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
      <input type="password" name="clave" id="clave" placeholder="Tú Contraseña" value={claveRegistro} onChange={cambiarClaveRegistro} />
      <button onClick={registrar}>Registrar</button>
      <br />
      <br />
    </>
  )
}

export default Registro