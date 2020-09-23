import React from 'react';
import Input from '../input';
import { ReactComponent as AddImage } from '../../../assets/icons/addImage.svg';

const FileUpload = (props) => {
  const uploadFile = (files) => {
    const data = new FormData();
    const filesArray = Array.prototype.slice.call(files);

    filesArray.forEach((file) => {
      data.append('preTaskImages', file);
    });
    props.getFiles(data);
  };
  return (
    <div>
      <label htmlFor='add-task-images'>
        <AddImage />
      </label>

      <Input
        type='file'
        onChange={(event) => uploadFile(event.target.files)}
        label=''
        id='add-task-images'
        multiple
        accept='image/x-png,image/svg,image/jpeg image/jpg'
      />
    </div>
  );
};

export default FileUpload;
