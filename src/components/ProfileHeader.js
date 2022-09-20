import React from 'react';

const ProfileHeader = ({ profile }) => {
  return (
    <div className="profile-header">
      <h4>{profile.name}</h4>
      <p>@{profile.userName}</p>
    </div>
  );
};

export default ProfileHeader;
