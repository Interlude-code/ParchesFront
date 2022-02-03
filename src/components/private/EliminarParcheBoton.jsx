import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteParche } from '../../redux/middlewares/deleteParche'

const EliminarParcheBoton = () => {
  // id de parche quemado:
  const idParche = '61fb26d708ccba113def6ff3'

  const dispatch = useDispatch()

  const handleEliminar = () => {
    dispatch(deleteParche(idParche))
  }

  return (
    <button
      onClick={handleEliminar}
      className='
      px-4 py-2
      text-white
      bg-red-600
      hover:bg-red-700
      filled-button
      mt-8
      mb-5
      border
      rounded'
      type='button'
    >
      Eliminar
    </button>
  )
}

export default EliminarParcheBoton
