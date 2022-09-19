import React from 'react';

const ProfileImage = ({ imageSource }) => {
  return <img className="profile-image" alt="profile" src={imageSource} />;
};

export default ProfileImage;
