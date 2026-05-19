function StudentCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px gray",
        textAlign: "center",
        backgroundColor: "white"
      }}
    >
      <h2 style={{ color: "darkblue" }}>
        {props.name}
      </h2>

      <p style={{ color: "black", fontSize: "20px" }}>
        <b>Course:</b> {props.course}
      </p>

      <p style={{ color: "black", fontSize: "20px" }}>
        <b>Marks:</b> {props.marks}
      </p>
    </div>
  );
}

export default StudentCard;