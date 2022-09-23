import React, { useState } from 'react';
import reply from '../images/reply.svg';
import retweet from '../images/retweet.svg';
import like from '../images/like.svg';
import share from '../images/share.svg';

const PostInteractions = ({
  interactions,
  handleInteractionOnTweet,
  postID,
}) => {
  const [retweeted, setRetweeted] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleRetweet = () => {
    setRetweeted(!retweeted);
  };

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="interactions">
      <div className="reply-container">
        <img className="reply-button" alt="reply" src={reply} />
        <span>{interactions.replies}</span>
      </div>
      <div className="retweet-container">
        <img
          className={retweeted ? 'retweet-button retweeted' : 'retweet-button'}
          alt="retweet"
          src={retweet}
          onClick={(e) => {
            toggleRetweet();
            let increment = 1;
            if (retweeted === true) {
              increment = -1;
            }
            handleInteractionOnTweet(postID, increment, 'retweeted');
          }}
        />
        <span>{interactions.retweets}</span>
      </div>
      <div className="like-container">
        <img
          className={liked ? 'like-button liked' : 'like-button'}
          alt="like"
          src={like}
          onClick={(e) => {
            toggleLiked();
            let increment = 1;
            if (liked === true) {
              increment = -1;
            }
            handleInteractionOnTweet(postID, increment, 'liked');
          }}
        />
        <span>{interactions.likes}</span>
      </div>
      <div>
        <img className="share-button" alt="share" src={share} />
      </div>
    </div>
  );
};

export default PostInteractions;
