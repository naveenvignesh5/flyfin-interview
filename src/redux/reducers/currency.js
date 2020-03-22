import actionTypes from "../actionTypes";

const initialState = {
  rates: {},
  base: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENCY_BASE_SUCCESS:
      return Object.assign({}, initialState, state, {
        rates: action.payload.rates,
        base: action.payload.base
      });
    default:
      return initialState;
  }
};
