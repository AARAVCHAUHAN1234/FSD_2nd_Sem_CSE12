// function App(){
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>This is my first React App</p>
//       <Cse12/>
//     </div>
//   );
// }

// function Cse12(){
//   return(
//       <div>
//         <p>Hello Everyone</p>
//       </div>
//   );
// }
// export default App;
import Students from "./Student";
function App(){
  return(
    <div class="App">
      <h1>Student Information</h1>
      <Student name="Alice" course="CSE12" mark={85}/>
      <Student name="Bob" course="CSE12" mark={90}/>   
      <Student name="Charlie" course="CSE12" mark={78}/>
    </div>
  )
}
export default App;