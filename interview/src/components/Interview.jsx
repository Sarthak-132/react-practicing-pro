function Interview() {
  const students = [];
  const id = [0];
  const main = [1];
  const here = [2, 4, 5, 6];

  return (
    <>
      <div>
        <h1>{students.length && "No students found"}</h1>
        <h1>Numbers of Students :{students.length}</h1>
      </div>
      <hr />
      <div>
        <h1>{id.length && "No students found"}</h1>
        <h1>Numbers of Students :{id.length}</h1>
      </div>
      <hr />
      <div>
        <h1>{main.length && "No students found"}</h1>
        <h1>Numbers of Students :{main.length}</h1>
      </div>
      <hr />

      {/* // if not empty then do not show any thing  */}
      <div>
        <h1>{main.length === 0 && "No students found"}</h1>
        <h1>Numbers of Students :{main.length}</h1>
      </div>
      <hr />

      {/* // if empty then show "No students found" */}
      <div>
        <h1>{students.length === 0 && "No students found"}</h1>
        <h1>Numbers of Students :{students.length}</h1>
      </div>
      <hr />

      {/*  */}
      <div>
        <h1>{!here.length && "No students found"}</h1>
        <h1>Numbers of Students :{here.length}</h1>
      </div>
      <hr />
    </>
  );
}

export default Interview;
