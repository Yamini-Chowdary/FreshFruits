import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Set the target time for the countdown
    const targetDate = new Date().getTime() + 3600000*12; // 1 hour from now

    const updateCountdown = () => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if (remainingTime <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return; // Stop the countdown
      }

      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);

      setTimeLeft({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-none flex items-center justify-center  text-black">
      <div className="text-center">
        {/* <h1 className="text-3xl font-bold mb-4">Countdown Timer</h1> */}
        <div className="flex justify-center gap-4 text-4xl font-mono">
          <div>
            <span className="block text-6xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm uppercase">Hours</span>
          </div>
          <div>
            <span className="block text-6xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm uppercase">Minutes</span>
          </div>
          <div>
            <span className="block text-6xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm uppercase">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;