import React, { useState, useEffect } from 'react';

const FileInfo = ({ file }) => {
  const [fileType, setFileType] = useState('');

  useEffect(() => {
    if (file) {
      setFileType(file.fileType.split('/')[0]);
    }
  }, [file]);

  return (
    <div className='text-center border flex items-center justify-center m-4 flex-col p-2 rounded-md border-blue-200'>
      {fileType === 'image' && file ? (
        <img
          src={file.fileUrl}
          width={200}
          height={200}
          className='h-[200px] rounded-md object-contain'
          alt='file'
        />
      ) : (
        <img
          src='/file-png.png'
          width={200}
          height={200}
          className='h-[200px] rounded-md object-contain'
          alt='file'
        />
      )}
      <div className=''>
        <h2>{file && file.fileName}</h2>
        <h2 className='text-gray-400 text-[13px]'>{file && file.fileType}</h2>
      </div>
    </div>
  );
};

export default FileInfo;
