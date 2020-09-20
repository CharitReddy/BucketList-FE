import React from 'react';
import { withRouter } from 'react-router-dom';

const OpenTask = ({ history }) => {
  // const history = useHistory();
  console.log(history.location.state);
  return <div>HI</div>;
};

export default withRouter(OpenTask);
