import api from '../services/api';

export const FETCH_CARDS = "FETCH_CARDS";
export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS";
export const FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR";

export const getCards = () =>  async (dispatch) => {
    var payload = {errorMessage: '', data: []};

    try {
        let response = await api.get('/cards');
        payload.data = response.data;
        dispatch({type: FETCH_CARDS_SUCCESS, payload});
    } catch (error) {
        payload.errorMessage = error;
        dispatch({type: FETCH_CARDS_ERROR, payload});
    }
    
};