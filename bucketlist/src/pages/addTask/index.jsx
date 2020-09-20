import React, { useState } from 'react';
import Form from '../../components/molecules/form';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';
import {
  ADD_TASKS_FIELDS,
  ADD_TASKS_STATIC_DATA,
  ADD_TASK_BUTTONS,
} from './addTaskConstants';

const AddTask = () => {
  const [taskType, setTaskType] = useState('travel');

  const setTaskFields = (type) => {
    setTaskType(type);

    console.log(
      Object.keys(ADD_TASKS_FIELDS[taskType]).map((item) => {
        console.log(item);
      })
    );
  };

  return (
    <div>
      {Object.keys(ADD_TASK_BUTTONS).map((key) => (
        <Button
          buttonText={ADD_TASK_BUTTONS[key]}
          onClick={() => setTaskFields(ADD_TASK_BUTTONS[key].toLowerCase())}
        />
      ))}

      <Form>
        {Object.keys(ADD_TASKS_FIELDS[taskType]).map((key) => {
          console.log(ADD_TASKS_FIELDS[taskType][JSON.stringify(key)]);
          return (
            <Input label={ADD_TASKS_FIELDS[taskType][JSON.stringify(key)]} />
          );
        })}
      </Form>
    </div>
  );
};

export default AddTask;
