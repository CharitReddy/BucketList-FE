import React, { useState, useReducer } from 'react';
import Form from '../../components/molecules/form';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';
import { ADD_TASKS_FIELDS, ADD_TASK_BUTTONS } from './addTaskConstants';
import useTheme from '../../customHooks/useTheme';
import './addTask.scss';
import { TASKS_APIs } from '../../services/apiCalls';
import FileUpload from '../../components/atoms/fileUpload';

const addTaskReducer = (state, action) => {
  switch (action.type) {
    case 'type':
      return { ...state, type: action.payload };
    case 'name':
      return { ...state, name: action.payload };
    case 'motivation':
      return { ...state, motivation: action.payload };
    case 'objective':
      return { ...state, objective: action.payload };
    case 'others-name':
      return { ...state, others: { ...state.others, name: action.payload } };
    case 'others-description':
      return {
        ...state,
        others: { ...state.others, description: action.payload },
      };
    default:
      return state;
  }
};
const AddTask = () => {
  const theme = useTheme();
  const [taskType, setTaskType] = useState('travel');
  const [files, setFiles] = useState(undefined);
  const [state, dispatch] = useReducer(addTaskReducer, {
    type: '',
    name: '',
    motivation: '',
    objective: '',
    completed: false,
    others: { name: '', description: '' },
  });

  const setTaskFields = (type) => {
    setTaskType(type);
  };

  const addNewTask = (event) => {
    event.preventDefault();
    TASKS_APIs.addNewTask(state).then((response) => {
      const taskID = response.data._id;
      console.log(taskID);
      TASKS_APIs.uploadPreImages(taskID, files);
    });
  };
  console.log(files);
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
        key='add-new-task-form'
        submitButtonText='Add!'
        resetButtonText='Clear'
        onSubmit={(event) => addNewTask(event)}>
        <Input
          label={ADD_TASKS_FIELDS[taskType].name}
          key={`${ADD_TASKS_FIELDS[taskType].name}-input`}
          value={state.type}
          onChange={(event) =>
            dispatch({ type: 'type', payload: event.target.value })
          }
        />
        <Input
          label={ADD_TASKS_FIELDS[taskType].motivation}
          key={`${ADD_TASKS_FIELDS[taskType].motivation}-input`}
          value={state.motivation}
          onChange={(event) =>
            dispatch({ type: 'motivation', payload: event.target.value })
          }
        />
        <Input
          label={ADD_TASKS_FIELDS[taskType].others.name}
          key={`${ADD_TASKS_FIELDS[taskType].others}-input`}
          value={state.name}
          onChange={(event) =>
            dispatch({ type: 'name', payload: event.target.value })
          }
        />

        <textarea
          placeholder={ADD_TASKS_FIELDS[taskType].objective}
          rows={5}
          key={`${ADD_TASKS_FIELDS[taskType].objective}-textarea`}
          value={state.objective}
          onChange={(event) =>
            dispatch({ type: 'objective', payload: event.target.value })
          }
        />
        <textarea
          placeholder={ADD_TASKS_FIELDS[taskType].others.description}
          rows={5}
          key={`${ADD_TASKS_FIELDS[taskType].others.description}-textarea`}
          value={state.description}
          onChange={(event) =>
            dispatch({ type: 'description', payload: event.target.value })
          }
        />
        <FileUpload
          getFiles={(data) => {
            setFiles(data);
          }}
        />
      </Form>
    </div>
  );
};

export default AddTask;
