import React, { useEffect, useState } from 'react';
import Box from './Box';


const App = () => {

  const data = [
    {
      name: 1, 
      value: 0
    },
    {
      name: 2, 
      value: 0
    },
    {
      name: 3, 
      value: 0
    },
    {
      name: 4, 
      value: 4
    },
    {
      name: 5, 
      value: 5
    },
    {
      name: 6, 
      value: 0
    },
    {
      name: 7, 
      value: 0
    },
    ]

const [count, setCount] = useState(0);
const [newData, setNewData] = useState(data)

const handleClick = (v) => {
 const counter = count + 1
 setCount(counter)

 const tempCart = [...newData]

 let pd = tempCart.find(x => x.name === v.name)
 const index = tempCart.indexOf(pd)
  const cnt = tempCart[index]

  cnt.value = cnt.value + 1

  setNewData([...tempCart])


}

useEffect(()=> {
  
}, [count])
  return (
    <div>
      <h2>Board</h2>
        <h1>Counter {count}</h1>
        
        <div className="app">
           {
          newData.map(pd => <Box key={pd.name} handleClick={handleClick} name={pd}></Box>)
        }
        </div>
       
        lets do it
    </div>
  );
};

export default App;
