import React, { useState, useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../../components/molecules/form';
import Input from '../../components/atoms/input';
import Button from '../../components/atoms/button';
import { ADD_TASKS_FIELDS, ADD_TASK_BUTTONS } from './addTaskConstants';
import useTheme from '../../customHooks/useTheme';
import './addTask.scss';
import { TASKS_APIs } from '../../services/apiCalls';
import FileUpload from '../../components/atoms/fileUpload';
import Loader from '../../components/atoms/loader';
import Overlay from '../../components/atoms/overlay';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';

const addTaskReducer = (state, action) => {
  switch (action.type) {
    case 'prePopulate':
      return {
        type: action.payload.type,
        name: action.payload.name,
        motivation: action.payload.motivation,
        objective: action.payload.objective,
        completed: action.payload.completed,
        others: {
          name: action.payload.others.name,
          description: action.payload.others.description,
        },
      };
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
  const history = useHistory();
  const theme = useTheme();
  const [taskType, setTaskType] = useState('travel');
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState(undefined);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [status, setStatus] = useState('normal');
  const [state, dispatch] = useReducer(addTaskReducer, {
    type: taskType,
    name: '',
    motivation: '',
    objective: '',
    completed: false,
    others: { name: '', description: '' },
  });

  useEffect(() => {
    if (history.location.state)
      dispatch({ type: 'prePopulate', payload: history.location.state });
  }, []);

  const setTaskFields = (type) => {
    setTaskType(type);
  };

  const addNewTask = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (history.location.state) {
      TASKS_APIs.updateTaskById(history.location.state._id, state)
        .then((response) => {
          const taskID = response.data._id;
          TASKS_APIs.uploadPreImages(taskID, files).then(() => {
            setIsLoading(false);
            setModalVisibility(true);
            history.push('/home');
          });
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          setModalVisibility(true);
          setStatus('fail');
        });
    }
    TASKS_APIs.addNewTask(state)
      .then((response) => {
        const taskID = response.data._id;
        TASKS_APIs.uploadPreImages(taskID, files).then(() => {
          setIsLoading(false);
          setModalVisibility(true);
          history.push('/home');
        });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setModalVisibility(true);
        setStatus('fail');
      });
  };

  const setModal = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <div>
      <div className='add-task-buttons'>
        {Object.keys(ADD_TASK_BUTTONS).map((key) => (
          <Button
            buttonText={ADD_TASK_BUTTONS[key]}
            onClick={() => setTaskFields(ADD_TASK_BUTTONS[key].toLowerCase())}
            key={`${key}-selector-button`}
            className={`add-task-buttons-${theme} ${
              taskType.toLowerCase() === key.toLowerCase()
                ? `active-${theme}`
                : ''
            }`}
          />
        ))}
      </div>

      <Form
        className={`add-task-form add-task-${theme}`}
        key='add-new-task-form'
        submitButtonText='Add!'
        resetButtonText='Clear'
        submitButtonClass={`generic-submit-button generic-submit-button-${theme}`}
        resetButtonClass={`generic-reset-button generic-reset-button-${theme}`}
        onSubmit={(event) => addNewTask(event)}>
        <Input
          label={ADD_TASKS_FIELDS[taskType].name}
          key={`${ADD_TASKS_FIELDS[taskType].name}-input`}
          value={state.name}
          onChange={(event) =>
            dispatch({ type: 'name', payload: event.target.value })
          }
          required
        />
        <Input
          label={ADD_TASKS_FIELDS[taskType].motivation}
          key={`${ADD_TASKS_FIELDS[taskType].motivation}-input`}
          value={state.motivation}
          onChange={(event) =>
            dispatch({ type: 'motivation', payload: event.target.value })
          }
          required
        />
        <Input
          label={ADD_TASKS_FIELDS[taskType].others.name}
          key={`${ADD_TASKS_FIELDS[taskType].others}-input`}
          value={state.others.name}
          onChange={(event) =>
            dispatch({ type: 'others-name', payload: event.target.value })
          }
          required
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
          value={state.others.description}
          onChange={(event) =>
            dispatch({
              type: 'others-description',
              payload: event.target.value,
            })
          }
        />
        <FileUpload
          fileType='preTaskImages'
          getFiles={(data) => {
            setFiles(data);
          }}
        />
      </Form>
      <Overlay
        isVisible={modalVisibility}
        modalVisible={modalVisibility}
        onClick={setModal}>
        {status === 'fail' && (
          <div className='task-add-modal'>
            Task creation failed! Please try again.
            <Cross className='task-add-failed-icon' />
          </div>
        )}
      </Overlay>
      {isLoading && <Loader />}
    </div>
  );
};

export default AddTask;
