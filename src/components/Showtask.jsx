import React from 'react';
import { toast } from 'react-toastify';

const Showtask = ({t,removeticket,count,setCount,resolved,setResolved}) => {
    const handleremove=()=>{
removeticket(t)
toast("Resolved")
 setCount(count-1)
 setResolved(resolved+1)
    console.log("hello");
    
    }

   
    return (
        <div className='bg-white shadow-md p-5 mt-3 md:w-[260px] w-[400px]'>
            <p className='text-lg font-bold mb-5'>{t.title}</p>
            <button className='btn bg-green-500 w-full' onClick={handleremove}>Complete</button>
        </div>
    );
};

export default Showtask;