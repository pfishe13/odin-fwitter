import React from 'react';
import ProfileImage from './ProfileImage';
import dots from '../sidebar-icons/dots.svg';
import ProfileHeader from './ProfileHeader';

const ProfileContainer = ({ userProfile }) => {
  return (
    <div className="profile-container">
      <div>
        <ProfileImage imageSource={userProfile.profilePicture} />
        <ProfileHeader profile={userProfile} />
      </div>
      <div>
        <img alt="more" className="dots" src={dots} />
      </div>
    </div>
  );
};

export default ProfileContainer;
