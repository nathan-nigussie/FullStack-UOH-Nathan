const App = () => {
  const courseTitle = "Half Stack application development";
  const courses = [
    { courseName: "Fundamentals of React", exercises1: 10 },
    { courseName: "Using props to pass data", exercises2: 7 },
    { courseName: "State of a component", exercises3: 14 },
  ];
  //Header Component
  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const TotalExercises = () => {
    return (
      <p>
        Number of exercises:
        {courses[0].exercises1 + courses[1].exercises2 + courses[2].exercises3}
      </p>
    );
  };
  //part component
  const Part = () => {
    return (
      <>
        <p>
          {courses[0].courseName}:{courses[0].exercises1}
        </p>

        <p>
          {courses[1].courseName}:{courses[1].exercises2}
        </p>

        <p>
          {courses[2].courseName}:{courses[2].exercises3}
        </p>
      </>
    );
  };

  const Content = () => {
    return (
      <div>
        <Part />
      </div>
    );
  };
  return (
    <>
      <Header course={courseTitle} />
      <Content />
      <TotalExercises />
    </>
  );
};

export default App;
