import React from 'react';
import './taskCard.scss';
import PropTypes from 'prop-types';
import useTheme from '../../../customHooks/useTheme';

const TaskCard = ({
  taskMotivation,
  taskObjective,
  taskTitle,
  date,
  draggable,
}) => {
  const theme = useTheme();
  return (
    <div className={`task-card-base task-card-${theme}`} draggable={draggable}>
      <div className={`task-card-titles task-card-title-${theme}`}>
        <p className={`card-title-base card-title-${theme}`}>{taskTitle}</p>
        <p>Added on {date}</p>
      </div>
      <hr />
      <div>
        <span className='task-headers'>Why did I want to do this?</span>
        <p className='task-details'>{taskMotivation}</p>
        <span className='task-headers'>What do I want to do?</span>
        <p className='task-details'>{taskObjective}</p>
      </div>
    </div>
  );
};

export default TaskCard;

TaskCard.propTypes = {
  taskTitle: PropTypes.string,
  taskMotivation: PropTypes.string,
  taskObjective: PropTypes.string,
  date: PropTypes.string,
  draggable: PropTypes.bool,
};

TaskCard.defaultProps = {
  taskTitle: '<Task>',
  taskMotivation: '',
  taskObjective: '',
  date: 'MM / DD / YYYY',
  draggable: false,
};
