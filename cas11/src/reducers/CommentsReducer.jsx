import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL } from './../constants/CommentsConstants';

const initialState = {
    comments: [],
    error: undefined
}

const CommentsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload //500 comments
            }

        case FETCH_COMMENTS_FAIL:
            return {
                ...state,
                error: action.payload //error
            }

        default: return state;
    }
}

export default CommentsReducer;