import React from 'react';
import ProfileImage from './ProfileImage';
import TweetButton from './SmallButton';
import imageIcon from '../images/image.svg';

const ComposeTweet = ({ userProfile }) => {
  return (
    <div className="compose-tweet-container">
      <ProfileImage imageSource={userProfile.profilePicture} />
      <div>
        <div className="compose-input-container">
          <textarea placeholder="What's happening?" />
        </div>
        <div className="compose-footer">
          <img alt="icon of camera role" src={imageIcon} />
          <TweetButton classToAdd={'tweet-button'} text={'Tweet'} />
        </div>
      </div>
    </div>
  );
};

export default ComposeTweet;
