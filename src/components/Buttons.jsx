import React from 'react';

// eslint-disable-next-line react/prop-types
const Buttons = ({ primary, children }) => {
  const baseStyles = "px-4 py-2 text-lg font-bold rounded-lg transition duration-300 transform";
  const primaryStyles = "bg-blue-500 text-white hover:bg-blue-700";
  const secondaryStyles = "text-gray-500 hover:text-blue-700";

  const buttonStyles = primary ? `${baseStyles} ${primaryStyles}` : `${baseStyles} ${secondaryStyles}`;

  return (
    <button className={buttonStyles}>
      {children}
    </button>
  );
};
export default Buttons