import {useState} from "react";
function Gamestart(){
  const[score,setScore]=useState(0);
  return (
    <div>
      <h1>Current Score:{score}</h1>
      <button onClick={()=>setScore(Score+1)}>Score a point</button>
    </div>
  );
}
export default GameScore;