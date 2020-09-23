import React, { useState, useEffect } from 'react';
import { USER_APIs } from '../../services/apiCalls';
import useTheme from '../../customHooks/useTheme';
import './userProfile.scss';

const UserProfile = () => {
  const userID = localStorage.getItem('userID');
  const theme = useTheme();
  const [userProfile, setUserProfile] = useState({});
  const [userPicture, setUserPicture] = useState('');
  useEffect(() => {
    USER_APIs.getUserProfile().then((response) => {
      setUserProfile(response.data);
      USER_APIs.getUserPicture(userID).then((pictureResponse) => {
        setUserPicture(pictureResponse.data);
      });
    });
  }, []);

  return (
    <div className={`user-profile user-profile-${theme}`}>
      <img
        src='http://localhost:8000/users/avatar/5f6b1a3dc848234f5c86226b'
        alt='Profile'
      />
      {Object.keys(userProfile).map((key) => (
        <p
          className={`user-details user-details-${theme}`}
          key={`user-details-${key}`}>
          {userProfile[key]}
        </p>
      ))}
      {/* <p className={`user-details user-details-${theme}`}>{userProfile.name}</p>
      <p className={`user-details user-details-${theme}`}>{userProfile.dob}</p> */}
    </div>
  );
};

export default UserProfile;
