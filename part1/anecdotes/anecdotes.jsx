import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // Initialize votes and selectedIndex states
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selectedIndex, setSelectedIndex] = useState("null");

  // Function to select a random anecdote
  const selectRandomText = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelectedIndex(randomIndex);
  };

  // Function to handle voting
  const handleVote = () => {
    if (selectedIndex === null) return; // Do nothing if no anecdote is selected

    const newVotes = [...votes];
    newVotes[selectedIndex] += 1;
    setVotes(newVotes);
  };

  // Find the anecdote with the largest number of votes
  const largestVotes = Math.max(...votes);
  const largestVotedIndex = votes.indexOf(largestVotes);
  const largestVotedAnecdote =
    largestVotes > 0 ? anecdotes[largestVotedIndex] : "No voting data";

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      {selectedIndex !== null && (
        <>
          <h5>{anecdotes[selectedIndex]}</h5>
          <p>has {votes[selectedIndex]} votes</p>
          <button onClick={handleVote}>Vote</button>
        </>
      )}
      <button onClick={selectRandomText}>Next Anecdote</button>
      <h2>Anecdote with Most Votes</h2>
      <p>{largestVotedAnecdote}</p>
      <p> has {largestVotes} votes</p>
    </div>
  );
};

export default App;
