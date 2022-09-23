import React, { useState, useEffect } from 'react';
import { storage } from '../firebase-config';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import close from '../images/close.svg';
import submit from '../images/submit.svg';

const EditableProfileImage = ({ imageSource, handleProfilePictureChange }) => {
  const [editing, setEditing] = useState(false);
  const [file, setFile] = useState(null);

  const submitChanges = (e) => {
    e.preventDefault();
    toggleEditing();
  };
  const toggleEditing = (e) => {
    setEditing(!editing);
  };

  useEffect(() => {
    const uploadFile = () => {
      // const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            handleProfilePictureChange(downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);
  return (
    <>
      {editing ? (
        <form className="image-form" onSubmit={submitChanges}>
          <input
            style={{ width: '85px' }}
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            id="img"
            name="img"
            accept="image/*"
          />
          <div>
            <button
              onClick={toggleEditing}
              className="image-submit"
              style={{ width: '40px', height: '20px' }}
            >
              <img alt="close" src={close} />
            </button>
            <button
              className="image-submit"
              type="submit"
              style={{ width: '40px', height: '20px' }}
            >
              <img alt="submit" src={submit} />
            </button>
          </div>
        </form>
      ) : (
        <img
          onClick={toggleEditing}
          className="profile-image"
          alt="profile"
          src={imageSource}
        />
      )}
    </>
  );
};

export default EditableProfileImage;
