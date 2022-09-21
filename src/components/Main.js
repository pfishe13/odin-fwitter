import React from 'react';
import ComposeTweet from './ComposeTweet';

const Main = ({ userProfile }) => {
  return (
    <div id="main-container">
      <div>
        <h2>Home</h2>
      </div>
      <ComposeTweet userProfile={userProfile} />
    </div>
  );
};

export default Main;
