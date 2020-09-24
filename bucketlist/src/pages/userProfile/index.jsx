import React, { useState, useEffect } from 'react';
import { USER_APIs } from '../../services/apiCalls';
import useTheme from '../../customHooks/useTheme';
import './userProfile.scss';
import Loader from '../../components/atoms/loader';

const UserProfile = () => {
  const userID = localStorage.getItem('userID');
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [userPicture, setUserPicture] = useState('');
  useEffect(() => {
    setIsLoading(true);
    USER_APIs.getUserProfile().then((response) => {
      setUserProfile(response.data);
      USER_APIs.getUserPicture(userID).then((pictureResponse) => {
        setUserPicture(pictureResponse.data);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <div className={`user-profile user-profile-${theme}`}>
      <img
        src='http://localhost:8000/users/avatar/5f6bb1cfb03e922e3aa5415a'
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
      {isLoading && <Loader />}
    </div>
  );
};

export default UserProfile;
