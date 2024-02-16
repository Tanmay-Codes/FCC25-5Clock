import { useState } from "react";
import "./clock.css";
export default function Clock() {
  const [breaknum, setBreaknum] = useState(5);
  const [session, setSessionnum] = useState(25);
  const timeLeft = new Date(session * 60 * 1000).toISOString().slice(14, 19);
  const [clock, setClock] = useState(timeLeft);
  const handlePlay = () => {
    console.log(timeLeft.split(":"));
    const timer = setInterval(() => {
      setClock((prev) =>
        new Date((prev.split(":")[0] * 60 + +prev.split(":")[1]) * 1000 - 1000)
          .toISOString()
          .slice(14, 19)
      );
    }, 1000);
    if (clock === "00:00") clearInterval(timer);
  };
  return (
    <div className="clock">
      <h1>25 + 5 Clock</h1>
      <div className="controls">
        <div className="left">
          <h2 id="break-label">Break Length</h2>
          <div className="btns">
            <button
              className="clickable"
              id="break-increment"
              onClick={() => setBreaknum((prev) => prev + 1)}
            >
              ⬆️
            </button>
            <p id="break-length">{breaknum}</p>
            <button
              className="clickable"
              id="break-decrement"
              onClick={() => setBreaknum((prev) => prev - 1)}
            >
              ⬇️
            </button>
          </div>
        </div>
        <div className="right">
          <h2 id="session-label">Session Length</h2>
          <div className="btns">
            <button
              className="clickable"
              id="session-increment"
              onClick={() =>
                setSessionnum((prev) => (prev !== 60 ? prev + 1 : prev))
              }
            >
              ⬆️
            </button>
            <p id="session-length">{session}</p>
            <button
              className="clickable"
              id="session-decrement"
              onClick={() =>
                setSessionnum((prev) => (prev !== 1 ? prev - 1 : prev))
              }
            >
              ⬇️
            </button>
          </div>
        </div>
      </div>
      <div className="interface">
        <h2 id="timer-label">Session</h2>
        <p>{clock}</p>
        <div className="interface__controls">
          <button onClick={handlePlay}>▶️</button>
          <button>⏸️</button>
          <button>↗️</button>
        </div>
      </div>
    </div>
  );
}
