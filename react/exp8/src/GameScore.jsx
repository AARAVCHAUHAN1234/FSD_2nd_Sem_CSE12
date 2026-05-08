import {useState} from "react";
function Gamestart(){
  const[score,setScore]=useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Current Score:{score}</h1>
      <button onClick={()=>setScore(Score+1)}>Score a point</button>
      <button onClick={increment}>Increment</button>


    </div>
  );
}
export default GameScore;