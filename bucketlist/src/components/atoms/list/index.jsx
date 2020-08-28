import React from 'react';
import useTheme from '../../../customHooks/useTheme';
import './List.scss';

const List = ({ listArray, elementName, ulClass }) => {
  return (
    <div>
      <ul className={`ulBase ${ulClass}`}>
        {listArray.map((listItem) => (
          <li className={listItem.listClass}>{listItem.elementName}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
