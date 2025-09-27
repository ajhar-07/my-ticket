import React from 'react';

const Resolvedtusksection = ({ restask }) => {
  return (
    <div className='md:w-[250px] w-[350px] h-auto ml-2 mt-8'>
      <h3 className='font-bold text-xl'>Resolved Task</h3>  
      <div>
        
        {restask.map((t) => (
          <div key={t.id} className='bg-green-100 shadow-md p-3 mt-2 rounded font-bold'>
            {t.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resolvedtusksection;
