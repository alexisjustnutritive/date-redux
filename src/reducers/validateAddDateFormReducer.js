import { VALIDATE_DATE_FORM } from "../actions/types";

const validateAddDateFormReducer = ( state = false, action ) => {
    switch ( action.type ) {
        case VALIDATE_DATE_FORM:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                error: state
            }
    }
}

export default validateAddDateFormReducer;