import React from 'react';
import Showtask from './Showtask';

const Tasksection = ({task,removeticket,count,setCount,resolved,setResolved}) => {
    return (
        <div className='w-[50%] h-[250px ml-2'>
          <h3 className='font-bold text-xl'> Task Status</h3>  
          <div>
            {
           
            task.map(t=><Showtask t={t} removeticket={removeticket} 
            count={count} setCount={setCount} resolved={resolved} setResolved={setResolved}
            ></Showtask>)
           
            }
          </div>
        </div>
    );
};

export default Tasksection;