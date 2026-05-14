import React from "react";
function App() {
  const pic=
  return (
    <div className="container" style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
      <h1 className="REGISTRATION_FORM" style={{textAlign:"center"}}>
        REGISTRATION FORM
      </h1>
  <div style={{display:"flexbox",justifyContent:"center",alignItems:"center",background:"white", width:"500px",borderRadius:"10px", padding:"10px"}}>
    <form>
      <label>Student Name:</label>
      <input type="text" placeholder="enter the name" style={{padding:"10px", width:"90%", border:"1px solid black", borderRadius:"2rem"}}/><br/>
      <label>Email:</label>
      <input type="email" placeholder="enter the email" style={{padding:"10px", width:"90%", border:"1px solid black", borderRadius:"2rem"}}/><br/>
      <label>Password:</label>
      <input type="password" placeholder="enter the password" style={{padding:"10px", width:"90%", border:"1px solid black", borderRadius:"2rem"}}/><br/>
      <label>Mobile Number:</label>
      <input type="tel" placeholder="enter the number" style={{padding:"10px", width:"90%", border:"1px solid black", borderRadius:"2rem"}}/><br/><br/>
      <button type="submit" style={{padding:"10px", width:"90%", border:"1px solid black", borderRadius:"2rem", backgroundColor:"blue" ,color:"white"}}>Register</button>
    </form>
    
    </div>
</div>
  );
}

export default App;
