import { useState } from "react";

const UseStateGotcha = () => {


  let [num, setNum] = useState(0)

  const updateNum = () => {
    setTimeout(() => {
      setNum((currentState) => {
        console.log('current state is' + currentState);
        return currentState + 1;
      })
    }, 3000);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button type="button" className="btn" onClick={updateNum}>update</button>
    </div>
  )
};

export default UseStateGotcha;
