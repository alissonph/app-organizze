import { ADD_ENTRY_SUCCESS, ADD_ENTRY_ERROR, RESET_ENTRY } from '../actions/entry';

const INITIAL_STATE = {
    success: false,
    error: false,
    errorMessage: '',
    data: []
}

export default function (state = INITIAL_STATE, action: object) {
    const { type, payload } = action;

    switch (type) {
        case ADD_ENTRY_SUCCESS: {
            return {
                ...state,
                success: true,
                error: false,
                errorMessage: '',
                data: payload.data,
            };
        }
        case ADD_ENTRY_ERROR: {
            return {
                ...state,
                success: false,
                error: true,
                errorMessage: payload.errorMessage,
                data: payload.data,
            };
        }
        case RESET_ENTRY:{
            return INITIAL_STATE;
        }
        default: {
            return state;
        }
    }
}
