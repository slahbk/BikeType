import React from "react";

const Background = () => {
  const [speed, setSpeed] = React.useState(15);

  const handleSpeed = () => {
    if (speed === 1) return;
    setSpeed(speed - 1);
    document.documentElement.style.setProperty("--speed", `${speed}s`);
  };

  const handleReset = () => {
    setSpeed(15);
    document.documentElement.style.setProperty("--speed", '15s');
  };

  return (
    <div className="moving-image relative h-svh w-full flex-1 self-center bg-contain ease-out">
      <button
        className="absolute text-2xl top-0 right-0 bg-cyan-400"
        onClick={handleSpeed}
      >
        speed
      </button>
      <span className="absolute text-2xl top-10 right-0 ">{speed}</span>
      <button
        className="absolute text-2xl top-20 right-0 bg-red-400"
        onClick={handleReset}
      >
        reset
      </button>
    </div>
  );
};

export default Background;
