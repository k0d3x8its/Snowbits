import { useEffect } from 'react';
import Snowfall from 'react-snowfall';
import ProgressBar from './ProgressBar';
import avaxflakeCircuit from '../assets/avaxflakeCircuit.png';
import poweredByAvalanche from '../assets/PoweredbyAvalanche.png';
import avvyLogo from "../assets/avvyLogo.svg";
import DonateButton from './DonateButton';

/**************************************************/
/********** Images for Snowfall Effect ***********/
/**************************************************/

/**************** Snowflake ***********************/
/************ and source of image *****************/
const snowflakeImage = document.createElement('img')
snowflakeImage.src = 'src/assets/snowflake.png'

/************** Avalanche Logo ********************/
/************ and source of image *****************/
const avaxflakeImage = document.createElement('img')
avaxflakeImage.src = 'src/assets/avaxflake.png'

/***************** Snowball ***********************/
/************ and source of image *****************/
const snowballImage = document.createElement('img')
snowballImage.src = 'src/assets/snowball.png'

/*********** Snowball w/ Snowflakes ****************/
/************ and source of image *****************/
const snowballFlakeImage = document.createElement('img')
snowballFlakeImage.src = 'src/assets/snowballFlakes.png'

/**************************************************/
/******************* End Of ***********************/
/********** Images for Snowfall Effect ************/
/**************************************************/

/**************************************************/
/************* Initializing Various ***************/
/************ Snowflakes & Snowballs **************/
/**************************************************/
const snowflake = [snowflakeImage]
const avaxflake = [avaxflakeImage]
const snowball = [snowballImage]
const snowballFlake = [snowballFlakeImage]

// Coming Soon function
const ComingSoon = () => {   

/**************************************************/    
/**** UseEffect For TradingView Marquee Ticker ****/
/**************************************************/
    useEffect(() => {
        //Creating a new script element
        const script = document.createElement('script');
    
        //Setting script properties
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = `
            {
                "symbols": [
                    {
                        "description": "AVAX Market Cap",
                        "proName": "CRYPTOCAP:AVAX"
                    },
                    {
                        "description": "AVAX Dominance",
                        "proName": "CRYPTOCAP:AVAX.D"
                    },
                    {
                        "description": "AVAX to USDC",
                        "proName": "MEXC:AVAXUSDC"
                    },
                    {
                        "description": "AVAX to BTC",
                        "proName": "COINBASE:AVAXBTC"
                    },
                    {
                        "description": "AVAX to ETH",
                        "proName": "BINANCE:AVAXETH"
                    },
                    {
                        "description": "AVAX to SOL",
                        "proName": "BITRUE:AVAXSOL"
                    },
                    {
                        "description": "AVAX to BNB",
                        "proName": "BINANCE:AVAXBNB"
                    },
                    {
                        "description": "AVAX TVL",
                        "proName": "DEFILLAMA:AVAX_TVL"
                    }
                ],
                "showSymbolLogo": true,
                "colorTheme": "dark",
                "isTransparent": true,
                "displayMode": "adaptive",
                "locale": "en"
            }
        `;
        //Appending the script to the tradingview-widget-container element
        document.getElementById('tradingview-widget-container').appendChild(script);
        
        //Cleanup function to remove the script when the component unmounts
        return () => {
            document.getElementById('tradingview-widget-container').removeChild(script);
        };
    
    }, []);
/**************************************************/ 
/******************* END OF ***********************/
/**** UseEffect For TradingView Marquee Ticker ****/
/**************************************************/

    return(
<>  
{ 
/*************************************************/
/* Snowfall effect with various snowflake images */
/*************************************************/
}
<div>
    <Snowfall snowflakeCount={600} zIndex={11} images={snowball} radius={[5,10]} />
    <Snowfall snowflakeCount={50} zIndex={11} images={snowflake} radius={[5,18]} />
    <Snowfall snowflakeCount={25} zIndex={11} images={avaxflake} radius={[7,20]} />
    <Snowfall snowflakeCount={300} zIndex={11} images={snowballFlake} radius={[5,10]} />
</div>
{ 
  /*************************************************/
  /******************* END OF **********************/
  /* Snowfall effect with various snowflake images */
  /*************************************************/
}

{/* Image of avaxflake circuit */}
<img 
    src={avaxflakeCircuit} 
    alt="avaxflake circuit"
    className="object-contain mx-auto lg:h-96 lg:w-96 md:h-72 md:w-72 sm:h-64 sm:w-64" 
/> 

{/* Main content holding only the progress bar */}
<main className="flex-grow">
    <ProgressBar targetPercentage={10} />
</main>

{/* Container for TradingView widget */}
<div id="tradingview-widget-container" />

{/* Footer section */}
<footer className="bg-avax-red flex flex-between mt-auto h-auto">

    {
     /*************************************/
        /* Left section of the footer */
     /*************************************/
    }
    <div className="flex mb-auto shadow-[1px_1px_2px_1px_rgba(102,11,11,0.2)] rounded h-auto">
        <div className="flex rounded m-1 p-1 bg-red-800 shadow-inner">
            <p className="mb-1 tracking-tight text-black">
                Made with 🫀 by a TARS named k0d3x
                <br />
                {
                 /*********************************************************/
                  /* Container for DonateButton and Avvy Domains button */
                 /*********************************************************/
                }
                <div className="flex flex-wrap gap-1 items-center justify-center">

                    {/* DonateButton component */}
                    <DonateButton />

                    {/* reference link for referral to Avvy Domains */}
                    <a href="https://ref.avvy.domains/k0d3x.avax" target="_blank" rel="noopener noreferrer" >

                        {
                         /**********************************/
                             /* Avvy Domains button */
                         /**********************************/
                        }
                        <button 
                            className="rounded px-3 flex items-center 
                            bg-white transition-transform transform 
                            hover:scale-105 hover:bg-gray-400 active:scale-100 
                            focus:outline-none focus:ring focus:border-avax-red 
                            bg-gradient-to-r from-white to-gray-400 
                            hover:from-gray-400 hover:to-white"
                        >
                            {/* Avvy logo for button */}
                            <img 
                                src={avvyLogo}
                                alt="Avvy Domains" 
                                className="h-10 w-10 mr-1 mt-1 mb-1" 
                            />
                            <p>Domains</p>
                        </button>
                        {
                         /************************************/
                         /************* END OF ***************/
                           /* End Of Avvy Domains button */
                         /************************************/
                        }
                    </a>
                </div>
                {
                 /*********************************************************/
                  /********************** END OF ************************/
                  /* Container for DonateButton and Avvy Domains button */
                 /*********************************************************/
                }
            </p>
        </div>
    </div>
    {
     /*************************************/
     /************* END OF ****************/
        /* Left section of the footer */
     /*************************************/
    }

    {
     /*************************************/
        /* Right section of the footer */
     /*************************************/
    }
    <div className="flex-grow" />
    <div className="flex justify-center items-center p-8">
        <div className="ml-auto max-w-[200px]">

            {/* Powered by Avalanche logo/link */}
            <a href="https://www.avax.network/" target="_blank" rel="noopener noreferrer" >
                <img src={poweredByAvalanche} alt="Powered By Avalanche" className="w-full h-auto"/>
            </a>
        </div>   
    </div>
    {
     /*************************************/
     /************* END OF ****************/
        /* Right section of the footer */
     /*************************************/
    }
</footer>
</>

    
    );
};

export default ComingSoon