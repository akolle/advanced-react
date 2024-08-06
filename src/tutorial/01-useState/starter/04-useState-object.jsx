import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'andy', 
    age: 37, 
    hobby: 'tennis'});
  
  
  const updateValues = () => {
    setPerson({name: 'emily', age: 29, hobby: 'horses'});
  }

  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>Enjoys: {person.hobby}</h4>
    <button type='button' className='btn' onClick={updateValues}>update values</button>
  </>
};

export default UseStateObject;
