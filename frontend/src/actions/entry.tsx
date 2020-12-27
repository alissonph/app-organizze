import api from '../services/api';

export const ADD_ENTRY_SUCCESS = "ADD_ENTRY_SUCCESS";
export const ADD_ENTRY_ERROR = "ADD_ENTRY_ERROR";
export const RESET_ENTRY = "RESET_ENTRY";

export const addEntry = (entry) =>  async (dispatch) => {
    var payload = {errorMessage: '', data: {}};

    try {
        let response = await api.post('/entries', entry);
        payload.data = response.data;
        dispatch({type: ADD_ENTRY_SUCCESS, payload});
    } catch (error) {
        payload.errorMessage = error;
        dispatch({type: ADD_ENTRY_ERROR, payload});
    }
    
};