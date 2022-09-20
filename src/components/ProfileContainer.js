import React from 'react';
import ProfileImage from './ProfileImage';
import dots from '../sidebar-icons/dots.svg';

const ProfileContainer = ({ userProfile }) => {
  return (
    <div className="profile-container">
      <ProfileImage imageSource={userProfile.profilePicture} />
      <div>
        <h2>{userProfile.name}</h2>
        <p>@{userProfile.userName}</p>
      </div>
      <div>
        <img alt="more" className="dots" src={dots} />
      </div>
    </div>
  );
};

export default ProfileContainer;
