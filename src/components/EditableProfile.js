import React from 'react';
import dots from '../sidebar-icons/dots.svg';
import EditableProfileHeader from './EditableProfileHeader';
import EditableProfileImage from './EditbaleProfileImage';

const EditableProfile = ({
  userProfile,
  handleProfileNameChange,
  handleProfileUserNameChange,
  handleProfilePictureChange,
}) => {
  return (
    <div className="profile-container">
      <div>
        <EditableProfileImage
          imageSource={userProfile.profilePicture}
          handleProfilePictureChange={handleProfilePictureChange}
        />
        <EditableProfileHeader
          profile={userProfile}
          handleProfileNameChange={handleProfileNameChange}
          handleProfileUserNameChange={handleProfileUserNameChange}
        />
      </div>
      <div>
        <img alt="more" className="dots" src={dots} />
      </div>
    </div>
  );
};

export default EditableProfile;
