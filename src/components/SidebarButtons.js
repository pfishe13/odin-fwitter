import React from 'react';
import profile from '../sidebar-icons/profile.svg';
import home from '../sidebar-icons/home.svg';
import explore from '../sidebar-icons/explore.svg';
import notifications from '../sidebar-icons/notifications.svg';
import messages from '../sidebar-icons/messages.svg';
import bookmarks from '../sidebar-icons/bookmark.svg';
import lists from '../sidebar-icons/list.svg';
import more from '../sidebar-icons/more.svg';

const SidebarButtons = () => {
  const sidebarButtons = [
    {
      label: 'Home',
      src: home,
    },
    {
      label: 'Explore',
      src: explore,
    },
    {
      label: 'Notifications',
      src: notifications,
    },
    {
      label: 'Messages',
      src: messages,
    },
    {
      label: 'Bookmarks',
      src: bookmarks,
    },
    {
      label: 'Lists',
      src: lists,
    },
    {
      label: 'Profile',
      src: profile,
    },
    {
      label: 'More',
      src: more,
    },
  ];
  return (
    <div>
      {sidebarButtons.map((button) => {
        return (
          <div className="sidebar-button" key={button.label}>
            <img alt={button.label} src={button.src} />
            <span>{button.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarButtons;
