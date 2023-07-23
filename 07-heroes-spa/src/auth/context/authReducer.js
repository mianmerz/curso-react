import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return { ...state, logged: false, user: action.payload };
        case types.logout:
            return state;

        default:
            return state;
    }

}