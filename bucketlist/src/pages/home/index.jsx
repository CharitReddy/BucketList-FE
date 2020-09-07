import React, { useEffect } from 'react';
import { TASKS_APIs } from '../../services/apiCalls';
import Card from '../../components/atoms/card';

const Home = () => {
  useEffect(() => {
    TASKS_APIs.getUserTasks()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <Card />
    </div>
  );
};

export default Home;
