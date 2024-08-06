import { useState } from 'react';

const ShortCircuitOverview = () => {

  //falsy
  const [text, setText] = useState('');
  //truthy
  const [name, setName] = useState('andy');

  const codeExample = text || 'hello world';

  return (
  <div>
    <h4>Falsy OR : {text || 'hellow world'}</h4>
    <h4>Falsy AND : {text && 'hellow world'}</h4>
    <h4>Truthy OR : {name || 'hellow world'}</h4>
    <h4>Truthy AND : {name && 'hellow world'}</h4>
    <h4>{codeExample}</h4>
  </div>
  )
};
export default ShortCircuitOverview;
