import React from 'react';
import SearchButton from './SearchButton';
import WhatsHappening from './WhatsHappening';
import WhoToFollow from './WhoToFollow';

const RightSidebar = () => {
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
    <div id="right-sidebar-container">
      <SearchButton />
      <WhatsHappening />
      <WhoToFollow />
    </div>
  );
};

export default RightSidebar;
