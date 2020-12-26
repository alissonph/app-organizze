import { FETCH_ACCOUNTS, FETCH_ACCOUNTS_SUCCESS, FETCH_ACCOUNTS_ERROR } from '../actions/account';

const INITIAL_STATE = {
    error: false,
    errorMessage: '',
    data: []
}

export default function (state = INITIAL_STATE, action: object) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ACCOUNTS: {
            return state;
        }
        case FETCH_ACCOUNTS_SUCCESS: {
            return {
                ...state,
                error: false,
                errorMessage: '',
                data: payload.data,
            };
        }
        case FETCH_ACCOUNTS_ERROR: {
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
