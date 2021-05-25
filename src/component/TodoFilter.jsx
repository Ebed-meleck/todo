import { connect } from "react-redux"
import * as React from 'react';
import { _setFilterAction } from "../store/filterAction";
import { _filterSelector } from "../store/filterSelector";


export function TodoFilter({ value,onchange}) {
  
  return (
    
    <div>
      {console.log(value)}
      <button   disabled={value === null} onClick={() => onchange(null)} >Aucun filtre</button>
      <button
        disabled={value === true}
        onClick={() => onchange(true)} >completed</button>
      <button
        disabled={value === false}
        onClick={() => onchange(false)} >A faire</button>
    </div>
  );
}
export const todoFilterStore = connect(

  state => ({
    value:_filterSelector(state)
  }),
  dispatch => ({
    onchange: (value) => dispatch(_setFilterAction(value))
  })
)(TodoFilter);