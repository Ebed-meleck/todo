import { UPDATE_FILTER } from "./filterReducer"


export const _setFilterAction = (value) => ({
  type: UPDATE_FILTER,
  payload:value
})