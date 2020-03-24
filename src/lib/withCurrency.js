import React from "react";
import { useSelector } from "react-redux";

const withCurrency = Component => props => {
  const { currency, rates } = useSelector(state => state.currency);
  const curr = val => {
    if (isNaN(val) || !currency) return 0;
    
    let _val = Number(val);

    return Math.round(_val * rates[currency]);
  };

  return <Component c={curr} {...props} />;
};

export default withCurrency;
