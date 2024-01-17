import { useState } from 'react';
import k0d3xSuit from '../assets/k0d3xSuit.png';
import k0d3x from '../assets/k0d3x.png'

// Define the DonateButton component
const DonateButton = () => {
  // State to track whether the wallet address is copied or not
  const [copied, setCopied] = useState(false);

  // Function to handle the click event on the copy button
  const handleCopyClick = async () => {

    // contstant to hold the wallet address to be copied
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
      {
       /* TARS in suit animates and moves upwards then appears to descend */
       /* back into the button as if that is where it populated from */
       }
      <img
        src={k0d3xSuit}
        alt="K0d3x in a suit"
        className={`h-100 w-100 absolute bottom-0 transform ${
          copied ? 'translate-y-100' : 'translate-y-100 opacity-0'
        }`}
        style={{ transition: 'opacity 0.5s ease-out' }}
      />
      {
        /*****************/
        /* Donate Button */
        /*****************/
      }
      <button
        className="rounded border-black px-3 max-w-full
          flex items-center text-center bg-avax-red transition-transform 
          transform hover:scale-105 hover:bg-red-600 active:scale-100 
          focus:outline-none focus:ring focus:border-avax-red 
          bg-gradient-to-r from-grad-blue to-grad-red 
          hover:from-grad-red hover:to-grad-blue"
        onClick={handleCopyClick}
        title={copied ? 'Copied!' : 'snowbits.avax'}
      >
        {
          /**********************/
          /* Donate Button Icon */
          /**********************/
        }
        <img 
          src={k0d3x} 
          alt="K0d3x 8its" 
          className="h-12 w-12 mr-1 mt-0.5"  // Adjusted size to h-12 and w-12
          style={{ transition: 'opacity 0.2s ease-out', opacity: copied ? 0 : 1 }}
        />
        {
          /**********************/
          /******* END OF *******/
          /* Donate Button Icon */
          /**********************/
        }
        {/* Text indicating 'Donate' or 'Address copied!' based on the copied state */}
        <p>{copied ? <span>Address<br />copied!</span> : 'Donate'}</p>
      </button>
      {
        /*****************/
        /**** END OF *****/
        /* Donate Button */
        /*****************/
      }
    </div>
  );
};

export default DonateButton;