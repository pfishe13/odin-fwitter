import React from 'react';
import WhatsHappeningItem from './WhatsHappeningItem';
import ShowMoreButton from './ShowMoreButton';

const WhatsHappening = () => {
  const events = [
    {
      title: 'Vikings at Eagles',
      description: 'Trending with #Eagles, #Titans',
      genre: 'NFL',
    },
    {
      title: '#ATT5G',
      description: 'Buy it Today',
      genre: 'Promoted by AT&T',
    },
    {
      title: 'Cleveland Browns',
      description: '2,123 Tweets',
      genre: 'NFL',
    },
    {
      title: 'Ohio: Election news and updates',
      description: 'LIVE',
      genre: 'US elections',
    },
  ];
  return (
    <div className="right-sidebar-box">
      <h2>What's happening</h2>
      {events.map((event) => {
        return <WhatsHappeningItem key={event.title} event={event} />;
      })}
      <ShowMoreButton />
    </div>
  );
};

export default WhatsHappening;
