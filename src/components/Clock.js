import { useEffect, useState } from "react";
import "./clock.css";
export default function Clock() {
  const [breaknum, setBreaknum] = useState(5);
  const [session, setSessionnum] = useState(25);
  const [counter, setCounter] = useState(1500);
  const [clockState, setClockState] = useState({
    start: false,
    pause: true,
    reset: false,
  });
  let minutes = Math.floor(counter / 60)
    .toString()
    .padStart(2, "0");
  let seconds = (counter - minutes * 60).toString().padStart(2, "0");
  useEffect(() => {
    setCounter(session * 60);
  }, [session]);
  useEffect(() => {
    if (clockState.pause) return;
    let timer =
      counter > 0 && setInterval(() => setCounter((prev) => prev - 1), 1000);

    return () => clearInterval(timer);
  }, [counter, clockState]);
  const handlePlayPause = (action) => {
    //   console.log("working!");
    //   // console.log(timeLeft.split(":"));
    //   let timer = 1500;
    //   if (action === "start") {
    //     timer = setInterval(() => {
    //       setClock((prev) =>
    //         new Date(
    //           (prev.split(":")[0] * 60 + +prev.split(":")[1]) * 1000 - 1000
    //         )
    //           .toISOString()
    //           .slice(14, 19)
    //       );
    //     }, 1000);
    //     console.log(timer);
    //   } else if (action === "stop") {
    //     clearInterval(timer);
    //     console.log(timer);
    //     // setClock(
    //       //   (prev) =>
    //       //     new Date((prev.split(":")[0] * 60 + +prev.split(":")[1]) * 1000)
    //     // );
    //   }
    console.log("triggered!!");
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
              onClick={() => {
                setSessionnum((prev) => (prev !== 1 ? prev - 1 : prev));
              }}
            >
              ⬇️
            </button>
          </div>
        </div>
      </div>
      <div className="interface">
        <h2 id="timer-label">Session</h2>
        <p>{minutes + " : " + seconds} </p>
        <div className="interface__controls">
          <button
            onClick={() =>
              setClockState((prev) => ({ ...prev, pause: !prev.pause }))
            }
          >
            ▶️
          </button>
          <button
            onClick={() =>
              setClockState((prev) => ({ ...prev, pause: !prev.pause }))
            }
          >
            ⏸️
          </button>
          <button onClick={() => setCounter(session * 60)}>↗️</button>
        </div>
      </div>
    </div>
  );
}
