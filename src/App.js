import { useState } from 'react';
import './App.css';
import LeftSidebar from './components/LeftSidebar';
import Main from './components/Main';
import RightSidebar from './components/RightSidebar';
import twitterEgg from './images/twitter-egg.webp';
import InformationPopup from './components/InformationPopup';

function App() {
  const [userProfile, setUserProfile] = useState({
    name: 'John Appleseed',
    userName: 'JApple',
    profilePicture: twitterEgg,
  });

  const [openComposeBox, setOpenComposeBox] = useState(false);

  const toggleComposeTweetContainer = () => {
    setOpenComposeBox(!openComposeBox);
  };

  const handleProfileNameChange = (e) => {
    setUserProfile({ ...userProfile, name: e.target.value });
  };

  const handleProfileUserNameChange = (e) => {
    setUserProfile({ ...userProfile, userName: e.target.value });
  };

  const handleProfilePictureChange = (inp) => {
    setUserProfile({ ...userProfile, profilePicture: inp });
  };

  return (
    <div className="App">
      <InformationPopup />
      <LeftSidebar
        userProfile={userProfile}
        handleProfileNameChange={handleProfileNameChange}
        handleProfileUserNameChange={handleProfileUserNameChange}
        handleProfilePictureChange={handleProfilePictureChange}
        toggleComposeTweetContainer={toggleComposeTweetContainer}
      />
      <Main
        userProfile={userProfile}
        openComposeBox={openComposeBox}
        toggleComposeTweetContainer={toggleComposeTweetContainer}
      />
      <RightSidebar />
    </div>
  );
}

export default App;
