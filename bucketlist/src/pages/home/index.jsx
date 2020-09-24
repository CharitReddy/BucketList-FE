import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TASKS_APIs } from '../../services/apiCalls';
import Card from '../../components/atoms/card';
import useTheme from '../../customHooks/useTheme';
import './home.scss';
import HOME_MESSAGES from './HOME_MESSAGES';
import Loader from '../../components/atoms/loader';

const Home = () => {
  const theme = useTheme();
  const [userTasks, setUserTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setIsLoading(true);
    TASKS_APIs.getUserTasks()
      .then((response) => {
        setUserTasks(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const expandTask = (taskID) => {
    history.push({
      pathname: `/openTask/${taskID}`,
      state: userTasks.filter((task) => task._id === taskID),
    });
  };

  return (
    <div className='user-home'>
      <h2 className={`home-title home-title-${theme}`}>
        {HOME_MESSAGES.homeTitle}
      </h2>
      {userTasks.map((task) => (
        <Card
          cardTitle={task.name}
          onClick={() => expandTask(task._id)}
          key={`task-card-${task._id}`}
        />
      ))}
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
