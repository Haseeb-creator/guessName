import React from "react";

const Guess = ({ guessData }) => {
  return (
    <div>
      {guessData && (
        <div>
          <h2>Guess Results:</h2>
          <p>Name: {guessData.data?.name}</p>
          <p>Age: {guessData.data?.age || "Not available"}</p>
          <p>Gender: {guessData.data?.gender || "Not available"}</p>
          <p>Country: {guessData.data?.country}</p>
        </div>
      )}
    </div>
  );
};

export default Guess;
