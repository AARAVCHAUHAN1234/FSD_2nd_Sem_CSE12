function StudentCard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Marks: {props.marks}</p>
      <p>Grade: {props.grade}</p>
    </div>
  );
}

export default StudentCard;