import React from 'react';
import { View ,Image} from 'react-native';

const Bird= ({birdLeft,BirdBottom}) => {
    const birdWidth = 50
    const BirdHeight = 60

    return(
        <Image source={require("/home/lynextion/flapp-birds-rn/assets/bird.png")} style={{ 
            position: 'absolute',
            backgroundColor:'blue',
            width:50,
            height:60,
            bottom:BirdBottom - (BirdHeight / 2),
            left:birdLeft - (birdWidth / 2),
        }}/>

    )
}

export default Bird