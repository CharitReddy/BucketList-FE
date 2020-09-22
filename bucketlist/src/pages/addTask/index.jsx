import React, { useState } from 'react';
import Form from '../../components/molecules/form';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';
import {
  ADD_TASKS_FIELDS,
  ADD_TASKS_STATIC_DATA,
  ADD_TASK_BUTTONS,
} from './addTaskConstants';
import useTheme from '../../customHooks/useTheme';
import './addTask.scss';

const AddTask = () => {
  const theme = useTheme();
  const [taskType, setTaskType] = useState('travel');

  const setTaskFields = (type) => {
    setTaskType(type);
  };

  return (
    <div>
      {Object.keys(ADD_TASK_BUTTONS).map((key) => (
        <Button
          buttonText={ADD_TASK_BUTTONS[key]}
          onClick={() => setTaskFields(ADD_TASK_BUTTONS[key].toLowerCase())}
          key={`${key}-selector-button`}
        />
      ))}
      <Form
        className={`add-task-form add-task-${theme}`}
        key='add-new-task-form'>
        <Input
          label={ADD_TASKS_FIELDS[taskType].name}
          key={`${ADD_TASKS_FIELDS[taskType].name}-input`}
        />
        <Input
          label={ADD_TASKS_FIELDS[taskType].motivation}
          key={`${ADD_TASKS_FIELDS[taskType].motivation}-input`}
        />
        <Input
          label={ADD_TASKS_FIELDS[taskType].others.name}
          key={`${ADD_TASKS_FIELDS[taskType].others}-input`}
        />

        <textarea
          placeholder={ADD_TASKS_FIELDS[taskType].objective}
          rows={5}
          key={`${ADD_TASKS_FIELDS[taskType].objective}-textarea`}
        />
        <textarea
          placeholder={ADD_TASKS_FIELDS[taskType].others.description}
          rows={5}
          key={`${ADD_TASKS_FIELDS[taskType].others.description}-textarea`}
        />
      </Form>
    </div>
  );
};

export default AddTask;
