import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Obstacles = ({color,obstaclesLeft,obstacleWdith,obstacleHeight,gap}) =>{
    
    return(
        <>
            <View style={{
                position:'absolute',
                backgroundColor: color,               
                width: obstacleWdith,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: 0 + obstacleHeight + gap,

            }}
                        
            />

            <View style={{
                position:'absolute',
                backgroundColor: color,               
                width: obstacleWdith,
                height: obstacleHeight,
                left : obstaclesLeft,
                bottom: 0,

            }}
                        
            />

            

        </>

    ) 
}


export default Obstacles