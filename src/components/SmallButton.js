import React from 'react';

const SmallButton = ({ classToAdd, text }) => {
  return <button className={`${classToAdd} small-button`}>{text}</button>;
};

export default SmallButton;
