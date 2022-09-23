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

  const handleProfileNameChange = (e) => {
    setUserProfile({ ...userProfile, name: e.target.value });
  };

  const handleProfileUserNameChange = (e) => {
    setUserProfile({ ...userProfile, userName: e.target.value });
  };

  const handleProfilePictureChange = (inp) => {
    console.log(inp);
    setUserProfile({ ...userProfile, profilePicture: inp });
  };

  return (
    <div className="App">
      <LeftSidebar
        userProfile={userProfile}
        handleProfileNameChange={handleProfileNameChange}
        handleProfileUserNameChange={handleProfileUserNameChange}
        handleProfilePictureChange={handleProfilePictureChange}
      />
      <Main userProfile={userProfile} />
      <RightSidebar />
    </div>
  );
}

export default App;
