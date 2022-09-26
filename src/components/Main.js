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
import close from '../images/close.svg';

const Main = ({ userProfile, openComposeBox, toggleComposeTweetContainer }) => {
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
  };

  const handleTweetTextChange = (e) => {
    const tweetContent = e.target.value;
    setCurrentTweet({ ...currentTweet, text: tweetContent });
  };

  const handleTweetPhotoChange = (photo) => {
    setCurrentTweet({ ...currentTweet, image: photo });
  };

  const submitTweet = (e) => {
    if (currentTweet.text === '' && currentTweet.image === null) return;

    addTweetToDatabase(userProfile, currentTweet);

    e.preventDefault();
    setCurrentTweet({ ...currentTweet, text: '', image: null });
    fetchData();
  };

  const addTweetToDatabase = async (user, tweet) => {
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
    <>
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
      {openComposeBox && (
        <div className="popup">
          <div className="compose-tweet-popup">
            <div
              className="sidebar-button"
              onClick={toggleComposeTweetContainer}
            >
              <img alt="close" src={close} />
            </div>
            <ComposeTweet
              currentTweet={currentTweet}
              userProfile={userProfile}
              handleTweetTextChange={handleTweetTextChange}
              handleTweetPhotoChange={handleTweetPhotoChange}
              submitTweet={submitTweet}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
