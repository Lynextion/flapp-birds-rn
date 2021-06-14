import React from 'react';
import { View ,Image} from 'react-native';

const Bird= ({birdLeft,BirdBottom}) => {
    const birdWidth = 60
    const BirdHeight = 50

    return(
        <Image source={require("/home/lynextion/flapp-birds-rn/assets/bird.png")} style={{ 
            position: 'absolute',
            backgroundColor:'transparent',
            width:birdWidth,
            height:BirdHeight,
            bottom:BirdBottom - (BirdHeight / 2),
            left:birdLeft - (birdWidth / 2),
        }}/>

    )
}

export default Bird