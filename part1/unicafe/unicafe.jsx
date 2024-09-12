import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

//good: 1, neutral: 0, bad: -1
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positivePercentage} %</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodReview = () => {
    setGood(good + 1);
  };
  const badReview = () => {
    setBad(bad + 1);
  };
  const neutralReview = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodReview} text="Good" />
      {good}
      <Button handleClick={badReview} text="Bad" />
      {bad}
      <Button handleClick={neutralReview} text="Neutral" />
      {neutral}
      <br />
      <br />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
