// components/LoadingSpinner.tsx
import React from 'react';


const LoadingSpinner = () => {

  return (
    <div className='flex justify-center items-center w-full h-[100vh]'>
      <div className='text-blue-600 animate-spin rounded-full border-b-2 border-current h-15 w-15'>
      </div>
    </div>
  );
};

export default LoadingSpinner;