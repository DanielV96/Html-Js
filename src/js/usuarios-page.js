import { obtenerUsuarios } from './http-providers'

const body = document.body
let tbody
let consecutivo = 0

const crearHtml = () => {
  const html = `   
     <h1 class="mt-5">usuarios</h1>
    <hr/>
    <table>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">email</th>
          <th scope="col">Nombre</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    `
  const div = document.createElement('div')
  div.innerHTML = html
  body.appendChild(div)
  tbody = document.querySelector('tbody')
}

const crearFileUsuario = ({ email, first_name, last_name, avatar }) => {
  consecutivo++
  const html = `    
    <td scope="col">${consecutivo}. &nbsp </td>
    <td scope="col">${email}</td>
    <td scope="col">${first_name} ${last_name}</td>
    <td scope="col">
      <img class="img-thubnail" src="${avatar}"/>
    </td>
    `
  const tr = document.createElement('tr')
  tr.innerHTML = html
  tbody.appendChild(tr)
}
export const init = async () => {
  crearHtml()
  consecutivo = 0
  const usuarios = await obtenerUsuarios()
  usuarios.forEach(crearFileUsuario)
}
