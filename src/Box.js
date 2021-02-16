import React from 'react';

const Box = ({name, handleClick}) => {

    return (
        <div  className="box">
            {name.value} 
            <button  className={name.value % 2 ===  0 ? 'red' : 'blue' } onClick={()=>handleClick(name)}>Click to Increment</button>
            <h2>{name.name}</h2>
        </div>
    );
};

export default Box;