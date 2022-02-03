import { combineReducers } from 'redux'
import crearParcheReducer from '../reducers/CrearParcheReducer'
import UnParcheReducer from '../reducers/UnParcheReducer'
import EditarParcheReducer from '../reducers/EditarParcheReducer'
import EliminarParcheReducer from '../reducers/EliminarParcheReducer'
import DeshabilitarParcheReducer from '../reducers/DeshabilitarReducer'

const rootReducer = () => {
  return combineReducers(
    {
      unParche: UnParcheReducer,
      parcheCreado: crearParcheReducer,
      ParcheEditado: EditarParcheReducer,
      ParcheEliminado: EliminarParcheReducer,
      ParcheDeshabilitado: DeshabilitarParcheReducer
    }
  )
}

export default rootReducer
