import React from 'react'
import { useDispatch } from 'react-redux'
import { deshabParche } from '../../redux/middlewares/deshabilitarParche'

const DeshablilitarParcheBoton = () => {
  const parcheQuemado = {
    id: '61f9ae55c281fc06a82d3506',
    duenoDelParche: 'Nata8',
    nombreParche: { valorNombre: 'parche editar Nata8' },
    descripcion: { valorDescripcion: 'fghjn' },
    fechaCreacion: { valorFecha: '2022-02-01T22:49' },
    fechaInicio: { valorFecha: '2022-12-12T10:59' },
    fechaFin: { valorFecha: '2022-12-12T12:59:00' },
    estado: 'HABILITADO',
    categoria: 'MODA',
    capacidadMaxima: { valorCapacidad: 12 },
    ubicacionParche: {
      lat: 1,
      lng: 1,
      direccion: 'CIUDAD DE COLOMBIA'
    },
    cantidadParticipantes: null
  }

  const dispatch = useDispatch()

  const handleDeshabilitar = () => {
    dispatch(deshabParche(
      parcheQuemado.id,
      parcheQuemado.duenoDelParche,
      parcheQuemado.nombreParche.valorNombre,
      parcheQuemado.descripcion.valorDescripcion,
      parcheQuemado.fechaCreacion.valorFecha,
      parcheQuemado.fechaInicio.valorFecha,
      parcheQuemado.fechaFin.valorFecha,
      parcheQuemado.estado,
      parcheQuemado.categoria,
      parcheQuemado.capacidadMaxima,
      parcheQuemado.ubicacionParche
    ))
  }

  return (
    <button
      onClick={handleDeshabilitar}
      className='
      px-4 py-2
      text-black
      bg-orange-500
      hover:bg-orange-600
      filled-button
      mt-8
      mb-5
      border
      rounded'
      type='button'
    >
      Deshabilitar
    </button>
  )
}

export default DeshablilitarParcheBoton
