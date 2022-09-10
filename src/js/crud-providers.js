const urlCrud = 'https://reqres.in/api/users'

const getUsuario = async (id) => {
  try {
    const resp = await fetch(`${urlCrud}/${id}`)
    if (!resp.ok) throw id`${id} no encontrado`
    const { data: usuario } = await resp.json()
    return usuario
  } catch (error) {
    throw error
  }
}

const crearUsuario = async (usuario) => {
  try {
    const resp = await fetch(urlCrud, {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
        'Content-type': 'application/json',
      },
    })
    if (!resp.ok) throw `Id ${id} no encontrado`
    return await resp.json()
  } catch (error) {
    throw error
  }
}

const actualizarUsuarios = async (id, usuario) => {
  try {
    const resp = await fetch(`${urlCrud}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(usuario),
      headers: {
        'Content-type': 'application/json',
      },
    })
    if (!resp.ok) throw `No se pudo actualizar el usuario ${usuario.name}`
    return await resp.json()
  } catch (error) {
    throw error
  }
}
const eliminarUsuario = async (id) => {
  try {
    const resp = await fetch(`${urlCrud}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'aplication/json',
      },
    })
    if (!resp.ok) throw `No se pudo eliminar el usuario con Id ${id}`
    return `El usuario con id ${id} ha sido eliminado`
  } catch (error) {
    throw error
  }
}

export { getUsuario, crearUsuario, actualizarUsuarios, eliminarUsuario }
