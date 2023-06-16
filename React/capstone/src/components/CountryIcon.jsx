import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-phone-number-input/style.css';
import { countries } from 'react-phone-number-input/input/CountryList';

const CountryIcon = ({ country, onCountryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCountryChange = (code) => {
    setIsOpen(false);
    onCountryChange(code);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setIsOpen(!isOpen)}>
        <span className={`flag-icon flag-icon-${country.toLowerCase()} mx-2`} />
        <span>{country}</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {countries.map((c) => (
            <a
              className="dropdown-item"
              key={c.code}
              onClick={() => handleCountryChange(c.code)}>
              <span className={`flag-icon flag-icon-${c.code.toLowerCase()} mx-2`} />
              <span>{c.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

CountryIcon.propTypes = {
  country: PropTypes.string.isRequired,
  onCountryChange: PropTypes.func.isRequired,
};

export default CountryIcon;
