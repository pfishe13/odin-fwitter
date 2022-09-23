import React, { useState, useEffect } from 'react';
import ProfileImage from './ProfileImage';
import SmallButton from './SmallButton';
import imageIcon from '../images/image.svg';
import { storage } from '../firebase-config';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const ComposeTweet = ({
  currentTweet,
  userProfile,
  handleTweetTextChange,
  handleTweetPhotoChange,
  submitTweet,
}) => {
  const [editing, setEditing] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadedPhoto, setUploadedPhoto] = useState();

  // const submitChanges = (e) => {
  //   e.preventDefault();
  //   toggleEditing();
  // };

  const toggleEditing = (e) => {
    setEditing(!editing);
  };

  useEffect(() => {
    const uploadFile = () => {
      toggleEditing();
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
            handleTweetPhotoChange(downloadURL);
            setUploadedPhoto(downloadURL);
          });
        }
      );
    };
    file && uploadFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <div className="compose-tweet-container">
      <ProfileImage imageSource={userProfile.profilePicture} />
      <div>
        <form
          onSubmit={(e) => {
            submitTweet(e);
            setUploadedPhoto(null);
          }}
        >
          <div className="compose-input-container">
            <textarea
              placeholder="What's happening?"
              onChange={handleTweetTextChange}
              value={currentTweet.text}
            />
          </div>
          <div className="compose-footer">
            {editing ? (
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
            ) : (
              <img
                onClick={toggleEditing}
                alt="icon of camera role"
                src={imageIcon}
              />
            )}

            <SmallButton
              type="submit"
              classToAdd={'tweet-button'}
              text={'Tweet'}
            />
          </div>
        </form>
        {uploadedPhoto && (
          <div className="compose-tweet-photo">
            <img alt="uploaded" src={uploadedPhoto} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ComposeTweet;
