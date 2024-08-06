import { useState } from "react";

const ToggleChallenge = () => {

  const [isOn, setIsOn] = useState(false);

  // const toggleButton = () => {
  //   if (isOn) {
  //     setIsOn(false)
  //   } else {setIsOn(true)}
  // }

  return (
  <div>
    <button className="btn" onClick={() => setIsOn(!isOn)}>Toggle Button</button>
    {isOn && <ShowOn />}
  </div>
  )
};

const ShowOn = () => {
return (
  <div className="on">
    <h4>the button is on</h4>
  </div>
)
}



export default ToggleChallenge;
