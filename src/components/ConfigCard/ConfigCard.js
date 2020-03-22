import React from "react";
import { useTranslation } from "react-i18next";

// constants
import DropdownInput from "./DropdownInput";

// constants
import { LANGS, CURRENCIES } from "../../constants";

import "../../styles/ticketcard.css";

const CurrencyCard = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lang => {
    i18n.changeLanguage(lang, err => console.log(err));
  };

  return (
    <div className="ticket-card">
      <div className="ticket-card__body">
        <DropdownInput
          items={CURRENCIES}
          onItemSelect={item => console.log(item)}
          placeholder="Select Currency"
        />
        <DropdownInput
          items={LANGS}
          onItemSelect={item => changeLanguage(item)}
          placeholder="Select Language"
        />
      </div>
    </div>
  );
};

export default CurrencyCard;
