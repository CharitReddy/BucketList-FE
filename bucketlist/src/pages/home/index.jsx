import React, { useEffect } from 'react';
import { TASKS_APIs } from '../../services/apiCalls';
import Card from '../../components/atoms/card';
import useTheme from '../../customHooks/useTheme';
import './home.scss';
import HOME_MESSAGES from './HOME_MESSAGES';

const Home = () => {
  const theme = useTheme();

  useEffect(() => {
    TASKS_APIs.getUserTasks()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h2 className={`home-title home-title-${theme}`}>
        {HOME_MESSAGES.homeTitle}
      </h2>
      <Card />
    </div>
  );
};

export default Home;
