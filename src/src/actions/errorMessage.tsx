export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE";

export const setErrorMessage = (errorMessage) => (dispatch) => {
    const payload = { errorMessage };
    dispatch({type: SET_ERROR_MESSAGE, payload });
};

export const clearErrorMessage = () => async (dispatch) => {
    dispatch({type: CLEAR_ERROR_MESSAGE});
};