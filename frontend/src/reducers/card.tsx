import { FETCH_CARDS, FETCH_CARDS_SUCCESS, FETCH_CARDS_ERROR } from '../actions/card';

const INITIAL_STATE = {
    error: false,
    errorMessage: '',
    data: []
}

export default function (state = INITIAL_STATE, action: object) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_CARDS: {
            return state;
        }
        case FETCH_CARDS_SUCCESS: {
            return {
                ...state,
                error: false,
                errorMessage: '',
                data: payload.data,
            };
        }
        case FETCH_CARDS_ERROR: {
            return {
                ...state,
                error: true,
                errorMessage: payload.errorMessage,
                data: payload.data,
            };
        }
        default: {
            return state;
        }
    }
}
