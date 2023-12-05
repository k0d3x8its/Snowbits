import React, { useEffect } from 'react';
import Snowfall from 'react-snowfall';

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

/**************************************************/
/************* Powered By Avalanche ***************/
/********************* Logo ***********************/
/**************************************************/
const poweredByAvalanche = document.createElement('img')
poweredByAvalanche.src = 'src/assets/PoweredbyAvalanche.png'


// Coming Soon function
const ComingSoon = () => {   

/**************************************************/    
/**** UseEffect For TradingView Marquee Ticker ****/
/**************************************************/
    useEffect(() => {
        const script = document.createElement('script');
    
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
    
        document.getElementById('tradingview-widget-container').appendChild(script);
    
        return () => {
            document.getElementById('tradingview-widget-container').removeChild(script);
        };
    
    }, []);
/**************************************************/ 
/******************* End Of ***********************/
/**** UseEffect For TradingView Marquee Ticker ****/
/**************************************************/

    return(

    <>  
        <div>
            <Snowfall snowflakeCount={600} zIndex={11} images={snowball} radius={[5,10]} />
            <Snowfall snowflakeCount={50} zIndex={11} images={snowflake} radius={[5,18]} />
            <Snowfall snowflakeCount={25} zIndex={11} images={avaxflake} radius={[7,20]} />
            <Snowfall snowflakeCount={300} zIndex={11} images={snowballFlake} radius={[5,10]} />
        </div>

        <div id="tradingview-widget-container" />

        <footer className="bg-avax-red p-10">
            <div className="flex justify-between items-center">

                <div className="ml-auto max-w-[200px]">
                    <img src={poweredByAvalanche.src} alt="Powered By Avalanche" className="w-full h-auto"/>
                </div>   
            </div>
        </footer>
    </>
    );
};

export default ComingSoon