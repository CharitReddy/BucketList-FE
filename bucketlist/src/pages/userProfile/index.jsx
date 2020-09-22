import React, { useState, useEffect } from 'react';
import { USER_APIs } from '../../services/apiCalls';
import useTheme from '../../customHooks/useTheme';
import './userProfile.scss';

const UserProfile = () => {
  const theme = useTheme();
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    USER_APIs.getUserProfile().then((response) => {
      setUserProfile(response.data);
    });
  }, []);
  console.log(userProfile);

  return (
    <div className={`user-profile user-profile-${theme}`}>
      {Object.keys(userProfile).map((key) => (
        <p className={`user-details user-details-${theme}`}>
          {userProfile[key]}
        </p>
      ))}
      {/* <p className={`user-details user-details-${theme}`}>{userProfile.name}</p>
      <p className={`user-details user-details-${theme}`}>{userProfile.dob}</p> */}
    </div>
  );
};

export default UserProfile;
