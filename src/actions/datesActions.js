import { ADD_DATE } from "./types";

export const addDateAction = date => {
    return {
        type: ADD_DATE,
        payload: date
    }
}