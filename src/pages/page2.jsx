import React from 'react';
import './Page2.css';
import profileImage from '../assets/profile.jpg';


function Page2() {
  return (
    <div className="page2">
      <div className="squid-game-container">
       <img src={profileImage} alt="profile photo" className='profile-image' />
        <h1 className="player-name">Elia </h1>
        <p className="player-id">Player ID: 1232</p>
        <button
          className="instagram-button"
          onClick={() => window.open('https://www.instagram.com/YOUR-INSTAGRAM-HANDLE', '_blank')}
        >
          Follow on Instagram
        </button>
      </div>
    </div>
  );
}

export default Page2;