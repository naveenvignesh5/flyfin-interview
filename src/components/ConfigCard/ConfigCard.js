import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// actions
import { select_currency } from "../../redux/actions/action-currency";

// components
import DropdownInput from "./DropdownInput";

// constants
import { LANGS, CURRENCIES } from "../../constants";

import "../../styles/ticketcard.css";

const CurrencyCard = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang, err => console.log(err));
  };

  const changeCurrency = currency => {
    dispatch(select_currency(currency))
  };

  const langs = Object.keys(LANGS);

  return (
    <div className="ticket-card">
      <div className="ticket-card__body">
        <h3 className="title">Currency</h3>
        <DropdownInput
          items={CURRENCIES}
          onItemSelect={changeCurrency}
          placeholder="Select Currency"
        />
        <h3 className="title">Language</h3>
        <DropdownInput
          items={langs}
          defaultItem="English"
          onItemSelect={item => changeLanguage(LANGS[item])}
          placeholder="Select Language"
        />
      </div>
    </div>
  );
};

export default CurrencyCard;
