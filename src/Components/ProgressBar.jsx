import React, { useState, useEffect } from 'react';

// Define the ProgressBar component with a targetPercentage prop
const ProgressBar = ({ targetPercentage }) => {
  // State to track the current progress
  const [progress, setProgress] = useState(0);

  /****************************************/
   /* useEffect to handle the animation */
  /****************************************/
  useEffect(() => {
    // Set the duration of the animation in milliseconds
    const duration = 100000;
    // Set the number of frames per second for the animation
    const framesPerSecond = 480;
    // Calculate the total number of frames based on duration and frames per second
    const totalFrames = (duration / 1000) * framesPerSecond;
    // Calculate the increment for each frame
    const increment = (targetPercentage - progress) / totalFrames;

    // Variable to keep track of the frame count
    let frameCount = 0;

    /****************************************/
    /* Function to animate the progress bar */
    /****************************************/
    const animateProgress = () => {
      setProgress((prevProgress) => {
        // Calculate the new progress based on the increment
        const newProgress = prevProgress + increment;

        // If new progress is greater than or equal to the targetPercentage, set to targetPercentage
        // Otherwise, continue the animation by calling animateProgress recursively
        return newProgress >= targetPercentage
          ? targetPercentage
          : (() => {
              frameCount += 1;
              requestAnimationFrame(animateProgress);
              return newProgress;
            })();
      });
    };
    /****************************************/
    /*************** END OF *****************/
    /* Function to animate the progress bar */
    /****************************************/

    // Start the animation by calling animateProgress
    requestAnimationFrame(animateProgress);

    // Cleanup function to cancel the animation frame when the component unmounts
    return () => cancelAnimationFrame(frameCount);
  }, [targetPercentage, progress]);
  /****************************************/
   /************** END OF ***************/
   /* useEffect to handle the animation */
  /****************************************/

  // Render the progress bar with the current progress percentage
  return (
    <div className="flex justify-center items-center mb-5 mt-5">
      <div className="w-96 shadow-md">
        <div className="h-4 rounded-full bg-gray-500 relative">
          {/* Dynamic width for the progress bar based on the current progress */}
          <div
            className="h-4 rounded-full bg-avax-red absolute left-0 transition-width duration-1000 shadow-md"
            style={{ width: `${progress}%` }}
          ></div>
          {/* Display the progress percentage text */}
          <div className="absolute bottom-1 right-0 transform px-2 py-1 rounded text-avax-red">
            <p className="text-xl pb-1">{Math.round(progress)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;