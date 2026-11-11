import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from './constants';

const initialState = {
    users: [],
    message: undefined,
    //isLoading:false
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case GET_USERS_REQUEST:
            return {
                ...state,
                //isLoading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
                //isLoading: false

            }
        case GET_USERS_FAIL:
            return {
                ...state,
                message: action.payload
                //isLoading: false

            }

        default: return state;
    }
}