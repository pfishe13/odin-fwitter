import React from 'react';

const WhatsHappeningItem = ({ event }) => {
  return (
    <div className="event">
      <p>{event.genre}</p>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </div>
  );
};

export default WhatsHappeningItem;
