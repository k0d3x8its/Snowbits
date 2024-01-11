import React, { useState } from 'react';

// Define the DonateButton component
const DonateButton = () => {
  // State to track whether the wallet address is copied or not
  const [copied, setCopied] = useState(false);

  // Function to handle the click event on the copy button
  const handleCopyClick = async () => {
    // Mock wallet address for illustration purposes
    const walletAddress = '0xDcC490ddF299d5c9f0cA13f39077DBE1370Ff81c';

    try {
      // Attempt to copy the wallet address to the clipboard
      await navigator.clipboard.writeText(walletAddress);
      // Set the copied state to true if successful
      setCopied(true);
    } catch (err) {
      // Log an error if copying to clipboard fails
      console.error('Unable to copy to clipboard', err);
      // Set the copied state to false
      setCopied(false);
    } finally {
      // Reset the copied state after 3 seconds (3000 milliseconds)
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };

  // Render the DonateButton component
  return (
    <div className="flex items-center justify-center relative">
      {/* Larger animated image that starts from the bottom and moves upwards */}
      <img
        src="src/assets/k0d3xSuit.png"
        alt="K0d3x in a suit"
        className={`h-100 w-100 absolute bottom-0 transform ${
          copied ? 'translate-y-100' : 'translate-y-100 opacity-0'
        }`}
        style={{ transition: 'opacity 0.5s ease-out' }}


      />

      {/* Copy button with animation and 'Donate' or 'Address copied!' text */}
      <button
        className="rounded border-black px-3 max-w-full
          flex items-center text-center bg-avax-red transition-transform 
          transform hover:scale-105 hover:bg-red-600 active:scale-100 
          focus:outline-none focus:ring focus:border-avax-red 
          bg-gradient-to-r from-grad-blue to-grad-red 
          hover:from-grad-red hover:to-grad-blue"
        onClick={handleCopyClick}
        title={copied ? 'Copied!' : '0xDcC490ddF299d5c9f0cA13f39077DBE1370Ff81c'}
      >
        {/* Donate button icon */}
        <img 
          src="src/assets/k0d3x.png" 
          alt="K0d3x 8its" 
          className="h-12 w-12 mr-1 mt-0.5"  // Adjusted size to h-12 and w-12
          style={{ transition: 'opacity 0.2s ease-out', opacity: copied ? 0 : 1 }}
        />
        {/* Text indicating 'Donate' or 'Address copied!' based on the copied state */}
        <p>{copied ? <span>Address<br />copied!</span> : 'Donate'}</p>
      </button>
    </div>
  );
};

export default DonateButton;