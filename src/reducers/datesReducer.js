import { ADD_DATE } from "../actions/types";

const initialState = [];

const datesReducer = ( state = initialState, action ) => {
    console.log( 'accion recibida: ', action.payload );
    console.log( 'el state es: ', state.dates );
    switch( action.type ){
        case ADD_DATE:
            return state.concat( action.payload )
        default: 
            return state;
    }
};

export default datesReducer;