import React, { useState, useEffect } from 'react';

const ProgressBar = ({ targetPercentage }) => {
  // State to keep track of the current progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate the increment needed for each animation frame
    const increment = targetPercentage;

    // Variable to store the animation frame ID
    let animationFrameId;

    // Recursive function for smoother animation using requestAnimationFrame
    const animateProgress = () => {
      // Update the progress state
      setProgress((prevProgress) => {
        // Calculate the new progress based on the increment
        const newProgress = prevProgress + increment;

        // Check if the target percentage is reached
        newProgress >= targetPercentage ? cancelAnimationFrame(animationFrameId) : (animationFrameId = requestAnimationFrame(animateProgress));

        // Return the new progress
        return newProgress;
      });
    };

    // Start the animation by calling the animateProgress function
    animationFrameId = requestAnimationFrame(animateProgress);

    // Cleanup function to cancel the animation frame when the component is unmounted
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPercentage]);

  return (
    <div className="flex justify-center items-center mb-5 mt-5">
      {/* Container with fixed width */}
      <div className="w-96">
        {/* Outer progress bar container with relative positioning */}
        <div className="h-2 rounded-full bg-gray-500 relative">
          {/* Inner progress bar with absolute positioning and smooth width transition */}
          <div className="h-2 rounded-full bg-avax-red absolute left-0 transition-width duration-500" style={{ width: `${progress}%` }}></div>
          <div className="absolute bottom-1 right-0 transform px-2 py-1 rounded text-avax-red">
            <p className="text-xl">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;