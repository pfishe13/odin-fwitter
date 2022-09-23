import React from 'react';
import SidebarButtons from './SidebarButtons';
import twitter from '../sidebar-icons/twitter-logo.svg';
import EditableProfile from './EditableProfile';

const LeftSidebar = ({
  userProfile,
  handleProfileNameChange,
  handleProfileUserNameChange,
  handleProfilePictureChange,
}) => {
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
        <EditableProfile
          userProfile={userProfile}
          handleProfileNameChange={handleProfileNameChange}
          handleProfileUserNameChange={handleProfileUserNameChange}
          handleProfilePictureChange={handleProfilePictureChange}
        />
      </div>
    </div>
  );
};

export default LeftSidebar;
