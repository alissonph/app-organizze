import { SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from '../actions/errorMessage';

const INITIAL_STATE = {
    errorMessage: ''
};

export default function (state = INITIAL_STATE, action: object) {
    const { type, payload } = action;

    switch (type) {
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: payload.errorMessage,
            };
        case CLEAR_ERROR_MESSAGE:
                return {
                    ...state,
                    errorMessage: '',
                };
        default:
            return state;
    }
}
