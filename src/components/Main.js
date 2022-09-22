import React, { useState, useEffect } from 'react';
import ComposeTweet from './ComposeTweet';
import db from '../firebase-config';
import {
  collection,
  query,
  addDoc,
  getDocs,
  orderBy,
  updateDoc,
  doc,
  increment,
} from 'firebase/firestore';
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
    fetchData();
  }, []);

  const fetchData = async () => {
    const q = query(collection(db, 'posts'), orderBy('time', 'desc'));
    const querySnapshot = await getDocs(q);
    let dataArray = [];
    querySnapshot.forEach((doc) => {
      const elementToAdd = { ...doc.data(), id: doc.id };
      dataArray.push(elementToAdd);
    });
    setPosts([...dataArray]);
    console.log(dataArray);
  };

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
    fetchData();
  };

  const addTweetToDatabase = async (user, tweet) => {
    console.log('Sending tweet');
    await addDoc(collection(db, 'posts'), {
      profile: user,
      tweet: tweet,
      time: new Date(),
    });
  };

  const handleLikeTweet = async (postID) => {
    const tweetRef = doc(db, 'posts', postID);
    await updateDoc(tweetRef, {
      'tweet.interactions.likes': increment(1),
    });

    fetchData();
  };

  const handleRetweetTweet = async (postID) => {
    const tweetRef = doc(db, 'posts', postID);
    await updateDoc(tweetRef, {
      'tweet.interactions.retweets': increment(1),
    });

    fetchData();
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
      <TweetTimeline
        posts={posts}
        handleLikeTweet={handleLikeTweet}
        handleRetweetTweet={handleRetweetTweet}
      />
    </div>
  );
};

export default Main;
