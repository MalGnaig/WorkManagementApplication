import React, { useState, useEffect } from 'react';

export default function PopUpBoxModel({ show, onClose }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSecs, setTotalSecs] = useState(0);
  const [remainingTime, setRemainingTime] = useState(null);
  const [isCounting, setIsCounting] = useState(false);

  const startTimer = () => {
    const total = (hours * 3600) + (minutes * 60) + seconds;
    setTotalSecs(total);
    setIsCounting(true);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    onClose();
  };

  const resetTimer = () => {
    setTotalSecs(0);
    setIsCounting(false);
  }


  useEffect(() => {
    let interval = null;
    if (isCounting && totalSecs > 0) {
      interval = setInterval(() => {
        setTotalSecs((prevSeconds) => {
          if(prevSeconds === 60){
            alert("1 minute remaining");
          } else if (prevSeconds === 10) {
            alert("10 seconds remaining");
          }
          return prevSeconds - 1; // Decrease by 1 second
        });
      }, 1000); // Run every 1 second
    } else if (isCounting && totalSecs === 0) {
      alert("Timer has finished");
      setIsCounting(false); // Stop the countdown
    }
  
    // Move the cleanup function outside the conditional blocks
    return () => clearInterval(interval);
  }, [totalSecs, isCounting]);

    // This is the key addition: If `show` is false, don't render the modal
  if (!show) {
    return null; // Modal is not visible if `show` is false
  }

  const displayRemainingTime = () => {

  }
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Set Tasks Countdown</h1>
        <div value= {{remainingTime}}>
          <label> Remaining Time: </label>
          
        </div>
        <div>
          <label> Hours: </label>
          <input 
            type="number" 
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
          /> 
        </div>
        <div>
          <label> Minutes: </label>
          <input 
            type = "number" onChange={(e) => setMinutes(parseInt(e.target.value))}
            value={minutes}
          />
        </div>
        <div>
          <label>Seconds: </label>
          <input 
            type="number" onChange={(e) => setSeconds(parseInt(e.target.value))}
            value={seconds}
          />
        </div>
        <button onClick={startTimer}> Start Timer </button>

        <div className='rightExitTopRight'>
          {/*Button to exit screen put on the top right with css */}
          <button onClick={onClose}>
          <i class="fa-solid fa-circle-xmark"></i> 
          </button>
        </div>

        <div style={{ display: "flex" }}>
          <button onClick= {resetTimer} style={{marginLeft: "auto"}}> Reset Timer </button>
        </div>
        


      </div>
    </div>
  );
}



