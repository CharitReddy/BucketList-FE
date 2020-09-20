import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TASKS_APIs } from '../../services/apiCalls';
import Card from '../../components/atoms/card';
import useTheme from '../../customHooks/useTheme';
import './home.scss';
import HOME_MESSAGES from './HOME_MESSAGES';

const Home = () => {
  const theme = useTheme();
  const [userTasks, setUserTasks] = useState([]);
  const history = useHistory();
  useEffect(() => {
    TASKS_APIs.getUserTasks()
      .then((response) => {
        console.log(response.data);
        setUserTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const expandTask = (taskID) => {
    history.push({
      pathname: `/openTask/${taskID}`,
      state: userTasks.filter((task) => task._id === taskID),
    });
  };

  return (
    <div>
      <h2 className={`home-title home-title-${theme}`}>
        {HOME_MESSAGES.homeTitle}
      </h2>
      {userTasks.map((task) => (
        <Card cardTitle={task.name} onClick={() => expandTask(task._id)} />
      ))}
    </div>
  );
};

export default Home;
