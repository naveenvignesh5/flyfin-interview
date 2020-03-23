import React from "react";
import { useSelector } from "react-redux";

import defaultImage from "../../assets/images/sample_home_image.jpg";
import withCurrency from "../../lib/withCurrency";
import { useTranslation } from "react-i18next";

const RateCard = props => {
  const { index, listing = {}, c } = props;
  const { t } = useTranslation();
  const currency = useSelector(state => state.currency.currency);
  return (
    <div className="ratecard">
      <div className="ratecard__body">
        <img
          className="ratecard__image"
          alt=""
          src={listing.image || defaultImage}
        />
        <h3>
          {currency} {c(listing.price || 0)}
        </h3>
        <h5>{t(`ratecard.${index}.about`)}</h5>
      </div>
    </div>
  );
};

export default withCurrency(RateCard);
