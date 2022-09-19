import React from 'react';
import profileIcon from '../sidebar-icons/profile.svg';

const SidebarButtons = () => {
  const sidebarButtons = [
    {
      label: 'Home',
    },
    {
      label: 'Explore',
    },
    {
      label: 'Notifications',
    },
    {
      label: 'Messages',
    },
    {
      label: 'Bookmarks',
    },
    {
      label: 'Lists',
    },
    {
      label: 'Profile',
    },
    {
      label: 'More',
    },
  ];
  return (
    <div>
      {sidebarButtons.map((button) => {
        return (
          <div className="sidebar-button" key={button.label}>
            <img src={profileIcon} />
            {button.label}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarButtons;
