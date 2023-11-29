import React from 'react';
import Snowfall from 'react-snowfall';

const snowflakeImage = document.createElement('img')
snowflakeImage.src = 'src/assets/snowflake.png'

const avaxflakeImage = document.createElement('img')
avaxflakeImage.src = 'src/assets/avaxflake.png'

const snowballImage = document.createElement('img')
snowballImage.src = 'src/assets/snowball.png'

const snowballFlakeImage = document.createElement('img')
snowballFlakeImage.src = 'src/assets/snowballFlakes.png'

const snowflake = [snowflakeImage]
const avaxflake = [avaxflakeImage]
const snowball = [snowballImage]
const snowballFlake = [snowballFlakeImage]

const ComingSoon = () => {
    return(
        <div>
            <Snowfall snowflakeCount={600} zIndex={2} images={snowball} radius={[5,10]} />
            <Snowfall snowflakeCount={50} zIndex={3} images={snowflake} radius={[5,18]} />
            <Snowfall snowflakeCount={25} zIndex={4} images={avaxflake} radius={[7,20]} />
            <Snowfall snowflakeCount={300} zIndex={5} images={snowballFlake} radius={[5,10]} />
        </div>
    );
};

export default ComingSoon