import React, { useState } from 'react';
import ComposeTweet from './ComposeTweet';
import db from '../firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Main = ({ userProfile }) => {
  const [currentTweet, setCurrentTweet] = useState({
    text: '',
    image: null,
  });

  const handleTweetTextChange = (e) => {
    const tweetContent = e.target.value;
    setCurrentTweet({ ...currentTweet, text: tweetContent });
    console.log('Tweet content', currentTweet.text);
  };

  const submitTweet = (e) => {
    console.log(
      `Submit Tweet from ${userProfile.name} with content ${currentTweet.text}`
    );

    addTweetToDatabase(userProfile, currentTweet);

    e.preventDefault();
    setCurrentTweet({ ...currentTweet, text: '' });
  };

  const addTweetToDatabase = async (user, tweet) => {
    console.log('Sending tweet');
    const docRef = await addDoc(collection(db, 'tweets'), {
      profile: user,
      tweet: tweet,
    });
  };

  return (
    <div id="main-container">
      <div>
        <h2>Home</h2>
      </div>
      <ComposeTweet
        currentTweet={currentTweet}
        userProfile={userProfile}
        handleTweetTextChange={handleTweetTextChange}
        submitTweet={submitTweet}
      />
    </div>
  );
};

export default Main;
