import React, { useState } from 'react';

const EditableProfileHeader = ({
  profile,
  handleProfileNameChange,
  handleProfileUserNameChange,
}) => {
  const [editing, setEditing] = useState(false);

  const submitChanges = (e) => {
    e.preventDefault();
    toggleEditing();
  };

  const toggleEditing = (e) => {
    setEditing(!editing);
  };

  return (
    <div className="profile-header edit">
      {editing ? (
        <>
          <form onSubmit={submitChanges}>
            <input
              name="name"
              type="text"
              placeholder={profile.name}
              onChange={handleProfileNameChange}
            />
          </form>
          <form onSubmit={submitChanges}>
            <input
              name="userName"
              type="text"
              placeholder={profile.userName}
              onChange={handleProfileUserNameChange}
            />
          </form>
        </>
      ) : (
        <>
          <h4 onClick={toggleEditing}>{profile.name}</h4>
          <p onClick={toggleEditing}>@{profile.userName}</p>
        </>
      )}
    </div>
  );
};

export default EditableProfileHeader;
