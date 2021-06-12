import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Obstacles = ({color,
    obstaclesLeft,
    obstacleWdith,
    obstacleHeight,
    gap,
    randomBottom,
}) =>{
    
    return(
        <>
            <View style={{
                position:'absolute',
                backgroundColor: color,               
                width: obstacleWdith,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,

            }}
                        
            />

            <View style={{
                position:'absolute',
                backgroundColor: color,               
                width: obstacleWdith,
                height: obstacleHeight,
                left : obstaclesLeft,
                bottom: randomBottom,

            }}
                        
            />

            

        </>

    ) 
}


export default Obstacles