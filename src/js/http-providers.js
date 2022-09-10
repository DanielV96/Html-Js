const jokeUrl = 'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2'

const cloudPreset = 'aawweshu'
const cloudUrl =
  'https://api.cloudinary.com/v1_1/escuela-de-programaci-n-c13/upload'

// fetch(jokeUrl).then((resp) => {
//   resp.json().then(({id, value }) => {
//     console.log(id)
//     console.log(value)
//   })
// })
const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl)
    if (!resp.ok) throw 'No se pudo realizar la petición'
    const { icon_url, id, value } = await resp.json()
    return { icon_url, id, value }
  } catch (error) {
    throw error
  }
}
const obtenerUsuarios = async () => {
  try {
    const resp = await fetch(urlUsuarios)
    if (!resp.ok) throw 'No se pudo realizar la petición'
    const { data: usuarios } = await resp.json()
    return usuarios
  } catch (error) {
    throw error
  }
}

//Mecanismo para subir archivos.

const subirImagen = async (imagenASubir) => {
  const formData = new FormData()
  formData.append('upload_preset', cloudPreset)
  formData.append('file', imagenASubir)

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    })
    if (resp.ok) {
      const { secure_url } = await resp.json()
      return secure_url
    } else {
      throw await resp.json()
    }
  } catch (error) {
    throw error
  }
}

export { obtenerChiste, obtenerUsuarios, subirImagen }
