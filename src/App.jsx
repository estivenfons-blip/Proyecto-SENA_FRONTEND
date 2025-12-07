import { useEffect, useState } from 'react'
import './App.css'
import Productos from './Productos'
import Usuarios from './Usuarios'
import Registro from './Registro'

function App() {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [verificado, setVerificado] = useState(false)
  const [recargar, setRecargar] = useState(false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }
  function cambiarClave(evento) {
    setClave(evento.target.value)
  }

  function recargarAhora() {
    setRecargar(!recargar)
  }

  async function ingresar() {
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include' })
    if (peticion.ok) {
      setVerificado(true)
    } else {
      alert("Usuario o Clave incorrecta")
    }
  }

  async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include' })
    if (peticion.ok) {
      setVerificado(true)
    }
  }

  useEffect(() => {
    validar()
  }, [])

  if (verificado) {
    return (
      <>
        <Productos />
        <Registro recargarAhora={recargarAhora}/>
        <Usuarios recargar={recargar}/>
      </>)
  }

  return (
    <>
      <h1>Inisio de Sesión</h1>
      <input type="text" name="usuario" id="usuario" placeholder="Tú Usuairo" value={usuario} onChange={cambiarUsuario} />
      <input type="password" name="clave" id="clave" placeholder="Tú Contraseña" value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>Ingrear</button>
      <br />
      <br />
      <br />

    </>
  )
}

export default App