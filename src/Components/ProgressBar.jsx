import React, { useState, useEffect } from 'react';

const ProgressBar = ({ targetPercentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 100000;
    const framesPerSecond = 480;
    const totalFrames = (duration / 1000) * framesPerSecond;
    const increment = (targetPercentage - progress) / totalFrames;

    let frameCount = 0;

    const animateProgress = () => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;

        return newProgress >= targetPercentage
          ? targetPercentage
          : (() => {
              frameCount += 1;
              requestAnimationFrame(animateProgress);
              return newProgress;
            })();
      });
    };

    requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(frameCount);
  }, [targetPercentage, progress]);

  return (
    <div className="flex justify-center items-center mb-5 mt-5">
      <div className="w-96">
        <div className="h-4 rounded-full bg-gray-500 relative shadow-md">
          <div
            className="h-4 rounded-full bg-avax-red absolute left-0 transition-width duration-1000 shadow-md"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="absolute bottom-1 right-0 transform px-2 py-1 rounded text-avax-red">
            <p className="text-xl pb-1">{Math.round(progress)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
