import React from "react";

import "./ticketcard.css";
import TicketDateSelect from "./TicketDateSelect";

const SpecialTicketDivider = () => (
  <div className="ticket-card__clipped-section">
    <div className="ticket-card__clipped-left" />
    <div className="ticket-card__clipped-dot-line">
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
      <div className="dot">.</div>
    </div>
    <div className="ticket-card__clipped-right" />
  </div>
);

const TicketCard = () => {
  return (
    <div className="ticket-card">
      <div className="ticket-card__body">
        <div className="ticket-card__discount-wrapper">
          <i class="fas fa-money-bill-wave money-icon" />
          <p className="ticket-card__discount-title">Upto to 10% Cashback</p>
          <i class="far fa-question-circle info-icon" />
        </div>
        <hr className="ticket-card__divider" />
        <div className="ticket-card__price-wrapper">
          <div className="ticket-card__price-label">from</div>
          <div className="ticket-card__price-value">£90</div>
        </div>
        <TicketDateSelect />
        <button className="ticket-card__button">CHECK AVAILABILITY</button>
      </div>
      <SpecialTicketDivider />
      <div className="ticket-card__footer-text">
        <span className="ticket-card__footer-text-percent">100</span>
        BEST PRICE GUARANTEED
      </div>
    </div>
  );
};

export default TicketCard;
