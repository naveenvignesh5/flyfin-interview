import actionTypes from "../actionTypes";

const initialState = {
  rates: {},
  base: "",
  currency: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENCY:
      return Object.assign({}, state, { currency: action.payload.currency });
    case actionTypes.FETCH_CURRENCY_BASE_SUCCESS:
      return Object.assign({}, state, {
        rates: action.payload.rates,
        base: action.payload.base,
        currency: action.payload.base
      });
    default:
      return initialState;
  }
};
