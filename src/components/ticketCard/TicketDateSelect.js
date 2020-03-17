import React, { useState } from "react";

const TicketDateSelect = () => {
  const [dropdownVisible, toggleDropdown] = useState(false);
  return (
    <div className="ticket-card__dropdown">
      <div className="ticket-card__dropdown-select">
        <input className="ticket-card__dropdown-input" value="select a date" />
        <button
          className="ticket-card__dropdown-toggle"
          onClick={() => toggleDropdown(!dropdownVisible)}
        >
          <i className="fas fa-caret-down" />
        </button>
      </div>
      {dropdownVisible && (
        <div className="ticket-card__dropdown-calendar">
          Calendar to come here
        </div>
      )}
    </div>
  );
};

export default TicketDateSelect;
