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
    // console.log(dataArray);
  };

  const handleTweetTextChange = (e) => {
    const tweetContent = e.target.value;
    setCurrentTweet({ ...currentTweet, text: tweetContent });
    // console.log('Tweet content', currentTweet.text);
  };

  const handleTweetPhotoChange = (photo) => {
    console.log(photo);
    setCurrentTweet({ ...currentTweet, image: photo });
  };

  const submitTweet = (e) => {
    if (currentTweet.text === null || currentTweet.text === '') return;

    // console.log(
    //   `Submit Tweet from ${userProfile.name} with content ${currentTweet.text}`
    // );

    addTweetToDatabase(userProfile, currentTweet);

    e.preventDefault();
    setCurrentTweet({ ...currentTweet, text: '', image: null });
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

  const handleInteractionOnTweet = async (postID, inc, action) => {
    const tweetRef = doc(db, 'posts', postID);
    if (action === 'liked') {
      await updateDoc(tweetRef, {
        'tweet.interactions.likes': increment(inc),
      });
    } else {
      await updateDoc(tweetRef, {
        'tweet.interactions.retweets': increment(inc),
      });
    }

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
        handleTweetPhotoChange={handleTweetPhotoChange}
        submitTweet={submitTweet}
      />
      <TweetTimeline
        posts={posts}
        handleInteractionOnTweet={handleInteractionOnTweet}
      />
    </div>
  );
};

export default Main;
