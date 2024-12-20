import { useState } from 'react';

const JobStatus = () => {
  const [isLookingForJob, setIsLookingForJob] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button
        className="relative flex justify-center items-center w-[226px] h-[46px] rounded-full text-sm font-semibold border-2 text-gray-600 dark:border-gray-800 dark:text-gray-400 transition-all  hover:scale-105"
        disabled
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
