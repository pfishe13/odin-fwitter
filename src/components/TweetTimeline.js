import React from 'react';
import ProfileContainer from './ProfileContainer';
import PostBody from './PostBody';
import PostInteractions from './PostInteractions';

const TweetTimeline = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div className="post-container" key={index}>
            <ProfileContainer userProfile={post.profile} />
            <PostBody post={post.tweet} />
            <PostInteractions interactions={post.tweet.interactions} />
          </div>
        );
      })}
    </div>
  );
};

export default TweetTimeline;
