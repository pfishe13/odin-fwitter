import React from 'react';
import reply from '../images/reply.svg';
import retweet from '../images/retweet.svg';
import like from '../images/like.svg';
import share from '../images/share.svg';

const PostInteractions = ({ interactions }) => {
  return (
    <div className="interactions">
      <div>
        <img alt="reply" src={reply} />
        <span>{interactions.replies}</span>
      </div>
      <div>
        <img alt="retweet" src={retweet} />
        <span>{interactions.retweets}</span>
      </div>
      <div>
        <img alt="like" src={like} />
        <span>{interactions.likes}</span>
      </div>
      <div>
        <img alt="share" src={share} />
      </div>
    </div>
  );
};

export default PostInteractions;
