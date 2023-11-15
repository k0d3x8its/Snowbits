import React from 'react';
import Snowfall from 'react-snowfall';

const snowflake = document.createElement('img')
snowflake.src = 'src/assets/snowflake.png'
const avaxflake = document.createElement('img')
avaxflake.src = 'src/assets/avaxflake.png'

const snowflakeImage = [snowflake, snowflake]
const avaxflakeImage = [avaxflake, avaxflake]


const ComingSoon = () => {
    return(
        <div>
            <Snowfall snowflakeCount={400} zIndex={2} images={snowflakeImage} radius={[5,20]} />
            <Snowfall snowflakeCount={25} zIndex={2} images={avaxflakeImage} radius={[7,20]} />
        </div>
    );
};

export default ComingSoon