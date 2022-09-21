import React from 'react';
import SidebarButtons from './SidebarButtons';
import twitter from '../sidebar-icons/twitter-logo.svg';
import ProfileContainer from './ProfileContainer';

const LeftSidebar = ({ userProfile }) => {
  return (
    <div id="left-sidebar-container">
      <div>
        <h1>
          <img className="twitter-logo" alt="twitter logo" src={twitter} />
        </h1>
        <SidebarButtons />
        <button className="large-tweet-button sidebar-button tweet-button">
          Tweet
        </button>
      </div>
      <div>
        <ProfileContainer userProfile={userProfile} />
      </div>
    </div>
  );
};

export default LeftSidebar;
