import api from '../services/api';

export const FETCH_ACCOUNTS = "FETCH_ACCOUNTS";
export const FETCH_ACCOUNTS_SUCCESS = "FETCH_ACCOUNTS_SUCCESS";
export const FETCH_ACCOUNTS_ERROR = "FETCH_ACCOUNTS_ERROR";

export const getAccounts = () =>  async (dispatch) => {
    var payload = {errorMessage: '', data: []};

    try {
        let response = await api.get('/accounts');
        payload.data = response.data;
        dispatch({type: FETCH_ACCOUNTS_SUCCESS, payload});
    } catch (error) {
        payload.errorMessage = error;
        dispatch({type: FETCH_ACCOUNTS_ERROR, payload});
    }
    
};