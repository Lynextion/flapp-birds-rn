import React from 'react';
import { View } from 'react-native';

const Bird= ({birdLeft,BirdBottom}) => {
    const birdWidth = 50
    const BirdHeight = 60

    return(
        <View style={{ 
            position: 'absolute',
            backgroundColor:'blue',
            width:birdWidth,
            height:BirdHeight,
            bottom:BirdBottom - (BirdHeight / 2),
            left:birdLeft - (birdWidth / 2),
        }}/>

    )
}

export default Bird