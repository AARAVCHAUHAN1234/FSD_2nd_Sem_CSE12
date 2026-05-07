function StudentCard(props) {
  return (
    <div>
      <h2 style={{color:"Red" }}>Name: {props.name}</h2>
      <p style={{color:"green" }}>Marks: {props.marks}</p>
      <p style={{color:"green" }}>Grade: {props.grade}</p>
    </div>
  );
}

export default StudentCard;