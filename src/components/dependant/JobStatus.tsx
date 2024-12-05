import { useState } from 'react';

const JobStatus = () => {
  const [isLookingForJob, setIsLookingForJob] = useState(false);

  const toggleJobStatus = () => {
    setIsLookingForJob(!isLookingForJob);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={toggleJobStatus}
        className="relative hover:scale-105 flex justify-center items-center w-[226px] h-[46px] rounded-full text-sm font-semibold border-2 text-gray-600 dark:border-gray-800 dark:text-gray-400 transition-all duration-300 hover:bg-primary"
      >
        <span className="relative">
          {isLookingForJob ? 'Buscando trabajo' : 'No buscando trabajo'}
        </span>
        {isLookingForJob && (
          <>
            <span className="absolute left-5 inline-flex h-3 w-3 rounded-full bg-primary opacity-75 animate-ping"></span>
            <span className="absolute left-5 inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </>
        )}
      </button>
    </div>
  );
};

export default JobStatus;