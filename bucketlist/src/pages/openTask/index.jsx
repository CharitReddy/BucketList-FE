import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TaskCard from '../../components/atoms/taskCard';
import Overlay from '../../components/atoms/overlay';
import Input from '../../components/atoms/input';
import Form from '../../components/molecules/form';
import './openTask.scss';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as Complete } from '../../assets/icons/complete.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import useTheme from '../../customHooks/useTheme';
import { TASKS_APIs } from '../../services/apiCalls';
import { ReactComponent as Back } from '../../assets/icons/back.svg';

const OpenTask = ({ history }) => {
  const theme = useTheme();
  const [currentTask, setCurrentTask] = useState(history.location.state[0]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [taskStatus, setTaskStatus] = useState(currentTask.completed);
  useEffect(() => {
    const taskDetails = { completed: taskStatus };
    TASKS_APIs.updateTaskById(currentTask._id, taskDetails).then((response) => {
      setCurrentTask(response.data);
    });
  }, [taskStatus, currentTask._id]);

  const deleteTask = (taskId) => {
    TASKS_APIs.deleteTaskById(taskId);
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

  return (
    <div>
      <span className={`back-button back-button-${theme}`}>
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
          onClick={() => console.log('SVG Clicked')}
          id={`${currentTask._id}-edit-button`}
        />
        <div id='delete-task'>
          <Delete
            className={`delete-button delete-button-${theme}`}
            onClick={() => deleteTask(currentTask._id)}
            id={`${currentTask._id}-delete-button`}
          />
        </div>
        {currentTask.completed ? (
          <Close
            className={`close-button close-button-${theme}`}
            onClick={() => setTaskStatus(false)}
            id={`${currentTask._id}-close-button`}
          />
        ) : (
          <Complete
            className={`complete-button complete-button-${theme}`}
            onClick={() => setTaskStatus(true)}
            // onClick={() => setModal()}
            id={`${currentTask._id}-complete-button`}
          />
        )}
        <Overlay
          isVisible={modalVisibility}
          modalVisible={modalVisibility}
          onClick={setModal}>
          <Form submitButtonText='Yes'>
            <Input />
          </Form>
        </Overlay>
      </div>
    </div>
  );
};

export default withRouter(OpenTask);

OpenTask.propTypes = { history: PropTypes.shape };
OpenTask.defaultProps = { history: {} };
