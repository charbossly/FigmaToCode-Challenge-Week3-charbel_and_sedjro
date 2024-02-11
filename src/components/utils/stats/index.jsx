import React from "react";
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
const increaseAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StatsNumber = styled.div`
  font-size: 24px;
  animation: ${increaseAnimation} 0.8s ease;
`;

const StatsComponents = ({ number, text, unit }) => {
  const [randomStats, setRandomStats] = useState(0);

  useEffect(() => {
    let start = Date.now();
    let end = start + 3000; // 3 seconds period
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - start;
      const maxValue = number; // Set the maximum value
      let newStats;
      if (elapsedTime >= 3000) {
        newStats = maxValue;
        clearInterval(interval);
      } else {
        newStats = Math.floor(
          Math.min((elapsedTime / 3000) * maxValue, maxValue)
        );
      }
      setRandomStats(newStats);
    }, 50); // Update the number approximately 20 times per second

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-center">
        <div className="text-t55 text-blackBlueUi lg:text-blackUi lg:text-t48 font-extrabold lg:font-bold uppercase">
          <StatsNumber>
            {" "}
            {randomStats}
            {unit && unit}
          </StatsNumber>
        </div>
        <div className="font-montserrat text-xl font-bold leading-6 tracking-wide text-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default StatsComponents;
