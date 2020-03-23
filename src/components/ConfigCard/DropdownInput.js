import React, { useState } from "react";

const DropdownInput = props => {
  const { items, onItemSelect, ...inputProps } = props;
  const [dropdownVisible, toggleDropdown] = useState(false);
  const [selectedItem, updateSelectedItem] = useState(props.defaultItem || "");
  const handleOnItemSelect = item => {
    updateSelectedItem(item);
    toggleDropdown(false);
    onItemSelect(item);
  };

  return (
    <div className="ticket-card__dropdown">
      <div className="ticket-card__dropdown-select">
        <input
          {...inputProps}
          readOnly
          className="ticket-card__dropdown-input"
          value={selectedItem}
        />
        <button
          className="ticket-card__dropdown-toggle"
          onClick={() => toggleDropdown(!dropdownVisible)}
        >
          <i className="fas fa-caret-down" />
        </button>
      </div>
      {dropdownVisible && (
        <div className="ticket-card__dropdown-list">
          {items.map((item, idx) => (
            <div key={`item_${idx}`}>
              <div
                onClick={() => handleOnItemSelect(item)}
                className="ticket-card__dropdown-item"
              >
                {item}
              </div>
              {idx !== items.length - 1 && <hr />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownInput;
