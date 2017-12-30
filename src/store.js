import createSagaMiddleware from 'redux-saga'
import auth from './modules/auth'
import lists from './modules/lists'
import tasks from './modules/tasks'
import ui from './modules/ui'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { fromJS } from 'immutable'
import sagas from './sagas'

const rootReducer = combineReducers({
  auth,
  lists,
  tasks,
  ui
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export default store
