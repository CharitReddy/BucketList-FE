import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import Input from '../../components/atoms/input';
import Form from '../../components/molecules/form';
import Dropdown from '../../components/atoms/dropdown';
import FileUpload from '../../components/atoms/fileUpload';
import {
  ADD_EXPERIENCE_FIELDS,
  RATING_DROPDOWN,
} from './addExperienceConstants';
import useTheme from '../../customHooks/useTheme';
import { TASKS_APIs } from '../../services/apiCalls';
import Loader from '../../components/atoms/loader';
import './addExperience.scss';

const addExperienceReducer = (state, action) => {
  switch (action.type) {
    case 'experience':
      return { ...state, experience: action.payload };
    case 'experienceDescription':
      return { ...state, experienceDescription: action.payload };
    case 'experienceNotes':
      return { ...state, experienceNotes: action.payload };
    case 'rating':
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

const AddExperience = ({ history }) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [experience, setExperience] = useState(history.location.state);
  const [files, setFiles] = useState(undefined);
  const [state, dispatch] = useReducer(addExperienceReducer, {
    experience: '',
    experienceDescription: '',
    experienceNotes: '',
    rating: 0,
    completed: true,
  });

  const addExperience = (event, taskID) => {
    event.preventDefault();
    setIsLoading(true);
    TASKS_APIs.updateTaskById(taskID, state).then(() => {
      TASKS_APIs.uploadPostImages(taskID, files);
      setIsLoading(false);
    });
  };

  if (experience) {
    return (
      <div>
        <h2
          className={`add-experience-heading add-experience-heading-${theme}`}>
          I've completed {experience.name}
        </h2>
        <Form
          className={`add-task-form add-task-${theme}`}
          key='add-new-task-form'
          submitButtonText='Add!'
          resetButtonText='Clear'
          submitButtonClass={`generic-submit-button generic-submit-button-${theme}`}
          resetButtonClass={`generic-reset-button generic-reset-button-${theme}`}
          onSubmit={(event) => addExperience(event, experience._id)}>
          <Input
            label={ADD_EXPERIENCE_FIELDS.experience}
            key={`${ADD_EXPERIENCE_FIELDS.experience}-input`}
            value={state.experience}
            onChange={(event) =>
              dispatch({ type: 'experience', payload: event.target.value })
            }
            required
          />

          <textarea
            placeholder={ADD_EXPERIENCE_FIELDS.experienceDescription}
            rows={5}
            key={`${ADD_EXPERIENCE_FIELDS.experienceDescription}-textarea`}
            value={state.experienceDescription}
            onChange={(event) =>
              dispatch({
                type: 'experienceDescription',
                payload: event.target.value,
              })
            }
          />
          <textarea
            placeholder={ADD_EXPERIENCE_FIELDS.experienceNotes}
            rows={5}
            key={`${ADD_EXPERIENCE_FIELDS.experienceNotes}-textarea`}
            value={state.experienceNotes}
            onChange={(event) =>
              dispatch({
                type: 'experienceNotes',
                payload: event.target.value,
              })
            }
          />
          <Dropdown
            name='rating'
            dropdownOptions={RATING_DROPDOWN}
            onChange={(event) =>
              dispatch({ type: 'rating', payload: event.target.value })
            }
          />

          <FileUpload
            fileType='postTaskImages'
            getFiles={(data) => {
              setFiles(data);
            }}
          />
        </Form>
        {isLoading && <Loader />}
      </div>
    );
  }
  return <Redirect to='/home' />;
};

export default withRouter(AddExperience);
AddExperience.propTypes = { history: PropTypes.shape };
AddExperience.defaultProps = { history: {} };
