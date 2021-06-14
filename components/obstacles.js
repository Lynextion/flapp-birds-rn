import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View ,Image } from 'react-native';

const Obstacles = ({color,
    obstaclesLeft,
    obstacleWdith,
    obstacleHeight,
    gap,
    randomBottom,
}) =>{
    
    return(
        <>
            <Image source={require("/home/lynextion/flapp-birds-rn/assets/obstacle_up.png")} style={{
                position:'absolute',
                backgroundColor: 'transparent',               
                width: obstacleWdith,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,

            }}
                        
            />

            <Image source={require("/home/lynextion/flapp-birds-rn/assets/obstacle_down.png")}style={{
                position:'absolute',
                backgroundColor: 'transparent',              
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