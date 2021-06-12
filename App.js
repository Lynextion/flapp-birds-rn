import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './components/bird'
import Obstacles from './components/obstacles';



export default function App() {

  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [BirdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] =useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] =useState(screenWidth + screenWidth/2 + 30)
  const obstacleHeight = 300
  const obstacleWdith = 60
  const gravity = 3
  const gap = 200
  let gameTimerId
  let obstaclesLeftTımerId
  let obstaclesLeftTımerIdTwo

  //start bird failing
  useEffect(() => {
    if (BirdBottom > 0){
      gameTimerId=setInterval(() =>{
          setBirdBottom(BirdBottom => BirdBottom - gravity)
      }, 30)
      return () =>{
        clearInterval(gameTimerId)
      }
    }

   }, [BirdBottom])
    console.log(BirdBottom)
    
    //start first obstacles
    useEffect(() =>{
      if (obstaclesLeft > -obstacleWdith) {
        obstaclesLeftTımerId=setInterval(() =>{
          setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
        },30)
        return () =>{
          clearInterval(obstaclesLeftTımerId)
      } 
      }
      else {
        setObstaclesLeft(screenWidth)

      }

    },[obstaclesLeft])
   

    
    //start second obstacles
    useEffect(() =>{
      if (obstaclesLeftTwo > -obstacleWdith) {
        obstaclesLeftTımerIdTwo=setInterval(() =>{
          setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
        },30)
        return () =>{
          clearInterval(obstaclesLeftTımerIdTwo)
      } 
      }
      else {
        setObstaclesLeftTwo(screenWidth)

      }

    },[obstaclesLeftTwo])



  return (
    <View style={styles.container}>
      <Bird
        BirdBottom={BirdBottom}
        birdLeft={birdLeft}
      />

      <Obstacles
      color={'yellow'}
      obstaclesLeft={obstaclesLeft}
      obstacleWdith={obstacleWdith}
      obstacleHeight={obstacleHeight}
      gap={gap}
    />

    <Obstacles 
      color={'green'}
      obstaclesLeft={obstaclesLeftTwo}
      obstacleWdith={obstacleWdith}
      obstacleHeight={obstacleHeight}
      gap={gap}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
