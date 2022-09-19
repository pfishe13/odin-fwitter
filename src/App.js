import { useState } from 'react';
import './App.css';
import LeftSidebar from './components/LeftSidebar';
import Main from './components/Main';
import RightSidebar from './components/RightSidebar';
import twitterEgg from './images/twitter-egg.webp';

function App() {
  const [userProfile, setUserProfile] = useState({
    name: 'John Appleseed',
    userName: 'JApple',
    profilePicture: twitterEgg,
  });

  return (
    <div className="App">
      <LeftSidebar userProfile={userProfile} />
      <Main />
      <RightSidebar />
    </div>
  );
}

export default App;
