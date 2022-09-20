import React from 'react';
import SearchButton from './SearchButton';
import WhatsHappening from './WhatsHappening';
import WhoToFollow from './WhoToFollow';

const RightSidebar = () => {
  return (
    <div id="right-sidebar-container">
      <SearchButton />
      <WhatsHappening />
      <WhoToFollow />
    </div>
  );
};

export default RightSidebar;
