import actionTypes from "../actionTypes";
import axios from "axios";
import { CURRENCY_BASE_API } from "../../constants";

const fetchCurrencyRequest = () => ({
  type: actionTypes.FETCH_CURRENCY_BASE
});

const fetchCurrencySuccess = payload => ({
  type: actionTypes.FETCH_CURRENCY_BASE_SUCCESS,
  payload
});

const fetchCurrecyFailure = err => ({
  type: actionTypes.FETCH_CURRENCY_BASE_FAILURE,
  error: err.response.data.message
});

export const get_currency_base = () => async dispatch => {
  try {
    dispatch(fetchCurrencyRequest());
    const res = await axios.get(`${CURRENCY_BASE_API}/latest?base=USD`);
    dispatch(fetchCurrencySuccess(res.data));
  } catch (err) {
    dispatch(fetchCurrecyFailure(err));
  }
};
