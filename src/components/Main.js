import React, { useState, useEffect } from 'react';
import ComposeTweet from './ComposeTweet';
import db from '../firebase-config';
import { collection, query, addDoc, getDocs } from 'firebase/firestore';
import TweetTimeline from './TweetTimeline';

const Main = ({ userProfile }) => {
  const [currentTweet, setCurrentTweet] = useState({
    text: '',
    image: null,
    interactions: {
      replies: 0,
      likes: 0,
      retweets: 0,
    },
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'posts'));
      const querySnapshot = await getDocs(q);
      let dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
      });
      setPosts([...dataArray]);
      console.log(dataArray);
    };
    fetchData();
  }, []);

  const handleTweetTextChange = (e) => {
    const tweetContent = e.target.value;
    setCurrentTweet({ ...currentTweet, text: tweetContent });
    console.log('Tweet content', currentTweet.text);
  };

  const submitTweet = (e) => {
    if (currentTweet.text === null || currentTweet.text === '') return;

    console.log(
      `Submit Tweet from ${userProfile.name} with content ${currentTweet.text}`
    );

    addTweetToDatabase(userProfile, currentTweet);

    e.preventDefault();
    setCurrentTweet({ ...currentTweet, text: '' });
  };

  const addTweetToDatabase = async (user, tweet) => {
    console.log('Sending tweet');
    const docRef = await addDoc(collection(db, 'posts'), {
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
      <TweetTimeline posts={posts} />
    </div>
  );
};

export default Main;
