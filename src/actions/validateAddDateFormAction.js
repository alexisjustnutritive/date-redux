import { VALIDATE_DATE_FORM } from "./types";

export const validateAddDateFormAction = valid => {
    return {
        type: VALIDATE_DATE_FORM,
        payload: valid
    }
} 