import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 mx-auto flex md:flex-row flex-col-reverse justify-between '>
           {children} 
        </div>
    );
};

export default Container;