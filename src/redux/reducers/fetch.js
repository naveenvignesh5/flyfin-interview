import actionTypes from "../actionTypes";

const initialState = {
  isFetching: false,
  isError: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENCY_BASE:
      return Object.assign({}, state, { isFetching: true, isError: false });
    case actionTypes.FETCH_CURRENCY_BASE_SUCCESS:
      return Object.assign({}, state, { isFetching: false });
    case actionTypes.FETCH_CURRENCY_BASE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        error: action.error
      });
    default:
      return state;
  }
};
