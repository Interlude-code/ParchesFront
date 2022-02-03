import axios from 'axios'
import { parcheBorrado, parcheBorradoError, parcheBorradoLoading } from '../actions/EliminarParcheActions'

const API_URL_DELETE = 'https://el-parche.herokuapp.com/parches/eliminar/'
export const deleteParche = (id) => (dispatch) => {
  dispatch(parcheBorradoLoading())

  const options = {
    method: 'DELETE',
    url: API_URL_DELETE + id,
    headers: { 'Content-Type': 'application/json' }
  }

  axios.request(options).then(function (response) {
    dispatch(parcheBorrado(response.data))
  }).catch(function (error) {
    dispatch(parcheBorradoError(error.message))
  })
}
