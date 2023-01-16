import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [Count, setCount] = useState(0);
  return (
    <div className="app">
      <h3>Can we hangout sometime?</h3>
      <img
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ycu3axi9nwpagMlNyRp2gk1yeqC1cUnXouca9I6eUg&s"
      />
      <p className="credits">© Arun_dhaas1</p>

      <div className="app_buttons">
        <p
          className={`"app_no" ${Count % 2 !== 0 ? "app_noy" : "app_nos"} `}
          onMouseEnter={() => setCount(Count + 1)}
        >
          No
        </p>
        {/* <p>{Count}</p> */}
        <p className="app_yes" onClick={() => alert("Aww!! ThankYou 🙈")}>
          Yes,ofcourse!
        </p>
      </div>
    </div>
  );
}

export default App;
