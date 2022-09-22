import React from 'react';
import ProfileImage from './ProfileImage';
import SmallButton from './SmallButton';
import imageIcon from '../images/image.svg';

const ComposeTweet = ({
  currentTweet,
  userProfile,
  handleTweetTextChange,
  submitTweet,
}) => {
  return (
    <div className="compose-tweet-container">
      <ProfileImage imageSource={userProfile.profilePicture} />
      <div>
        <form onSubmit={submitTweet}>
          <div className="compose-input-container">
            <textarea
              placeholder="What's happening?"
              onChange={handleTweetTextChange}
              value={currentTweet.text}
            />
          </div>
          <div className="compose-footer">
            <img alt="icon of camera role" src={imageIcon} />
            <SmallButton
              type="submit"
              classToAdd={'tweet-button'}
              text={'Tweet'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComposeTweet;
