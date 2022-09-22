import React from 'react';
import reply from '../images/reply.svg';
import retweet from '../images/retweet.svg';
import like from '../images/like.svg';
import share from '../images/share.svg';

const PostInteractions = ({
  interactions,
  handleLikeTweet,
  handleRetweetTweet,
  postID,
}) => {
  return (
    <div className="interactions">
      <div className="reply-container">
        <img className="reply-button" alt="reply" src={reply} />
        <span>{interactions.replies}</span>
      </div>
      <div className="retweet-container">
        <img
          className="retweet-button"
          alt="retweet"
          src={retweet}
          onClick={(e) => handleRetweetTweet(postID)}
        />
        <span>{interactions.retweets}</span>
      </div>
      <div className="like-container">
        <img
          className="like-button"
          alt="like"
          src={like}
          onClick={(e) => handleLikeTweet(postID)}
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
