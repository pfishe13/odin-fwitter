import React from 'react';
import ProfileContainer from './ProfileContainer';
import PostBody from './PostBody';
import PostInteractions from './PostInteractions';

const TweetTimeline = ({ posts, handleLikeTweet, handleRetweetTweet }) => {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div className="post-container" key={post.id}>
            <ProfileContainer userProfile={post.profile} />
            <PostBody post={post.tweet} />
            <PostInteractions
              interactions={post.tweet.interactions}
              handleLikeTweet={handleLikeTweet}
              handleRetweetTweet={handleRetweetTweet}
              postID={post.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TweetTimeline;
