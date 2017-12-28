import * as types from './types'

export const doHideModal = (props) => ({ type: types.HIDE_MODAL })
export const doSetUpdatableTask = (id) => ({ type: types.SET_UPDATABLE_TASK, id })
export const doShowCreateModal = data => ({ type: types.SHOW_CREATE_MODAL })
export const doShowUpdateModal = ({ id }) => ({ type: types.SHOW_UPDATE_MODAL, id })
export const doToggleMenubar = (props) => ({ type: types.TOGGLE_MENUBAR })
export const doUpdateActiveList = (id) => ({ type: types.UPDATE_ACTIVELIST, id })