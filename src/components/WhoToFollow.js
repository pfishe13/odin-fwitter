import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileHeader from './ProfileHeader';
import justin from '../images/justin.jpeg';
import lebron from '../images/lebron.jpeg';
import cr from '../images/cr.jpeg';
import ShowMoreButton from './ShowMoreButton';
import SmallButton from './SmallButton';

const WhoToFollow = () => {
  const profiles = [
    { name: 'Justin Bieber', userName: 'justinbieber', profilePicture: justin },
    { name: 'Cristiano Ronaldo', userName: 'Cristiano', profilePicture: cr },
    { name: 'LeBron James', userName: 'KingJames', profilePicture: lebron },
  ];
  return (
    <div className="right-sidebar-box">
      <h2>Who to follow</h2>
      {profiles.map((profile) => {
        return (
          <div key={profile.name} className="profile-container follow">
            <div>
              <ProfileImage imageSource={profile.profilePicture} />
              <ProfileHeader profile={profile} />
            </div>
            <SmallButton classToAdd={'follow-button'} text={'Follow'} />
          </div>
        );
      })}
      <ShowMoreButton />
    </div>
  );
};

export default WhoToFollow;
