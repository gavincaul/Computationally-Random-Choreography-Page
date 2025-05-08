import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Test() {
  const [answer, setAnswer] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);
  const navigate = useNavigate();

  const checkAnswer = () => {
    const startValue = sessionStorage.getItem("start");
    const isCorrect =
      (startValue === "0" && answer === "first") ||
      (startValue === "1" && answer === "second");
    setCorrect(isCorrect);
    setAnswered(true);
  };

  return (
    <div className="background">
      <div
        style={{
          margin: "auto",
          maxWidth: "90vw",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <p>
          This project consisted of two videos: <b>an original video</b>, and a
          new, <b><i>computationally shuffled</i></b> video. Through a randomized
          algorithm, scenes from the original were re-ordered to create the second.
        </p>

        <h1>
          Which do you think was the <u>original</u> video: the{" "}
          <i>first</i> or the <i>second</i>?
        </h1>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            <input
              type="radio"
              value="first"
              checked={answer === "first"}
              onChange={() => setAnswer("first")}
            />
            First Video
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="second"
              checked={answer === "second"}
              onChange={() => setAnswer("second")}
            />
            Second Video
          </label>
        </div>

        {!answered ? (
          <button onClick={checkAnswer}>Submit</button>
        ) : (
          <div>
            {correct === true && (
              <>
                <p style={{ color: "green", fontWeight: "bold" }}>
                  Correct!
                </p>
                <p>Nice work — around <b>60%</b> of people got this right during the pilot study.</p>
              </>
            )}
            {correct === false && (
              <>
                <p style={{ color: "red", fontWeight: "bold" }}>
                  Incorrect.
                </p>
                <p>No worries — about <b>40%</b> of people missed it in the pilot study too.</p>
              </>
            )}
            <div style={{ marginTop: "1.5rem" }}>
              <button onClick={() => navigate("/")}>Go Home</button>
              <span style={{ margin: "0 1rem" }}></span>
              <button onClick={() => navigate("/about")}>About the Project</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
