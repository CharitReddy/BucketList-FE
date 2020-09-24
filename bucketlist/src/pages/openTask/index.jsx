import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TaskCard from '../../components/atoms/taskCard';
import Overlay from '../../components/atoms/overlay';
import Form from '../../components/molecules/form';
import './openTask.scss';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as Complete } from '../../assets/icons/complete.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import useTheme from '../../customHooks/useTheme';
import { TASKS_APIs } from '../../services/apiCalls';
import { ReactComponent as Back } from '../../assets/icons/back.svg';
import Loader from '../../components/atoms/loader';

const OpenTask = ({ history }) => {
  const theme = useTheme();
  const [currentTask, setCurrentTask] = useState(history.location.state[0]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [taskAction, setTaskAction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const deleteTask = (taskId) => {
    setIsLoading(true);
    setModalVisibility(false);
    TASKS_APIs.deleteTaskById(taskId).then(() => {
      setTaskAction('success');
      setIsLoading(false);
      setModalVisibility(true);
    });
  };

  const markTaskAsIncomplete = (taskId) => {
    setIsLoading(true);
    const taskDetails = { completed: false };
    TASKS_APIs.updateTaskById(taskId, taskDetails).then((response) => {
      setCurrentTask(response.data);
      setTaskAction('success');
      setIsLoading(false);
      setModalVisibility(true);
    });
  };

  const setModal = () => {
    setModalVisibility(!modalVisibility);
  };

  document.ondragenter = function dragAction(event) {
    if (event.target.id === `${currentTask._id}-delete-button`) {
      document
        .getElementById(`${currentTask._id}-delete-button`)
        .classList.toggle('color-red');
      console.log('abce');
    }
  };

  document.ondrop = function dragDelete(event) {
    console.log('qkejfkjqjkjwq');
    event.preventDefault();
    if (event.target.id === `${currentTask._id}-delete-button`) {
      // deleteTask();
      console.log('deleteeeeeeeeeeeee');
    }
  };

  const updateTaskStatus = (taskStatus) => {
    setTaskAction(taskStatus);
    setModalVisibility(true);
  };
  console.log(taskAction);
  return (
    <div>
      <span
        className={`back-button back-button-${theme}`}
        onClick={() => history.push({ pathname: '/home' })}
        role='button'>
        <Back className={`back-button-icon-${theme}`} />
        Back to all Tasks
      </span>
      <TaskCard
        taskTitle={currentTask.name}
        taskMotivation={currentTask.motivation}
        taskObjective={currentTask.objective}
        date={currentTask.updatedAt}
        draggable
        id={`${currentTask._id}-task-card`}
      />
      <div className='open-task-buttons'>
        <Edit
          className={`edit-button edit-button-${theme}`}
          onClick={() =>
            history.push({
              pathname: `/addTask`,
              state: currentTask,
            })
          }
          id={`${currentTask._id}-edit-button`}
        />
        <div id='delete-task'>
          <Delete
            className={`delete-button delete-button-${theme}`}
            onClick={() => updateTaskStatus('delete')}
            id={`${currentTask._id}-delete-button`}
          />
        </div>
        {currentTask.completed ? (
          <Close
            className={`close-button close-button-${theme}`}
            onClick={() => updateTaskStatus('incomplete')}
            id={`${currentTask._id}-close-button`}
          />
        ) : (
          <Complete
            className={`complete-button complete-button-${theme}`}
            onClick={() =>
              history.push({ pathname: '/addExperience', state: currentTask })
            }
            id={`${currentTask._id}-complete-button`}
          />
        )}
        <Overlay
          isVisible={modalVisibility}
          modalVisible={modalVisibility}
          onClick={setModal}>
          {taskAction === 'incomplete' && (
            <Form
              submitButtonClass={`generic-submit-button generic-submit-button-${theme}`}
              resetButtonClass={`generic-reset-button generic-reset-button-${theme}`}
              submitButtonText='Yes'
              resetButtonText='Cancel'
              onSubmit={() => markTaskAsIncomplete(currentTask._id)}>
              <p className='confirmation-modal-message'>
                Mark this task as incomplete?
              </p>
            </Form>
          )}
          {taskAction === 'delete' && (
            <Form
              submitButtonClass={`generic-submit-button generic-submit-button-${theme}`}
              resetButtonClass={`generic-reset-button generic-reset-button-${theme}`}
              submitButtonText='Yes'
              resetButtonText='Cancel'
              onSubmit={() => deleteTask(currentTask._id)}>
              <p className='confirmation-modal-message'>
                Are you sure you want to delete this task?
              </p>
            </Form>
          )}
          {taskAction === 'success' && (
            <p className='confirmation-modal-message'>Action successful!</p>
          )}
        </Overlay>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default withRouter(OpenTask);

OpenTask.propTypes = { history: PropTypes.shape };
OpenTask.defaultProps = { history: {} };
