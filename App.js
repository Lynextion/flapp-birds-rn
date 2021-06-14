import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View , TouchableWithoutFeedback, Touchable,ImageBackground} from 'react-native';
import Bird from './components/bird'
import Obstacles from './components/obstacles';


export default function App() {

  let screenWidth = Dimensions.get("screen").width
  let screenHeight = Dimensions.get("screen").height
  const [birdLeft,setBirdLeft] = useState(screenWidth / 2)
  const [BirdBottom, setBirdBottom] = useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft] =useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] =useState(screenWidth + screenWidth/2 + 30)
  const [obstaclesNegHeight,setObstaclesNegHeight] =useState(0)
  const [obstaclesNegHeightTwo,setObstaclesNegHeightTwo] =useState(0)
  const obstacleHeight = 400
  const obstacleWdith = 60
  const gravity = 10
  const gap = 200
  let gameTimerId
  let obstaclesLeftTımerId
  let obstaclesLeftTımerIdTwo
  const [isGameOver,setIsGameOver] = useState(false)

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

    const jump = () =>{
        if(!isGameOver && (BirdBottom < screenHeight)){
          setBirdBottom(BirdBottom => BirdBottom + 50)
          console.log('jumped')
        }
    }
    
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
        setObstaclesNegHeight(- Math.random() * 100)
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
        setObstaclesNegHeightTwo(- Math.random() * 200)
      }

    },[obstaclesLeftTwo])


    //check for collisions
    useEffect(()=>{
        if(
        ((BirdBottom < (obstaclesNegHeight + obstacleHeight + 30)  ||  
        BirdBottom > (obstaclesNegHeight + obstacleHeight + gap -30)) &&
        (obstaclesLeft > screenWidth/2 - 30 && obstaclesLeft < screenWidth/2 + 30)
        )
        ||
         ((BirdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30)  ||  
        BirdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap - 30)) &&
        (obstaclesLeftTwo > screenWidth/2 - 30 && obstaclesLeftTwo < screenWidth/2 + 30) 
        )
        )
        {
        console.log("game over")
        gameOver()
        
        }

    })


    const gameOver = () =>{
      setBirdLeft(screenWidth / 2)
      setBirdBottom(screenHeight/ 2)
      setObstaclesLeft(screenWidth)
      setObstaclesLeftTwo(screenWidth + screenWidth/2 + 30)
      setObstaclesNegHeight(0)
      setObstaclesNegHeightTwo (0)
  
    }

  return (
    <ImageBackground resizeMode='cover' source={require("./assets/bg.png")} style={styles.background}>
    <TouchableWithoutFeedback onPress={jump}>
      
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
      randomBottom={obstaclesNegHeight}
      gap={gap}
    />

    <Obstacles 
      color={'green'}
      obstaclesLeft={obstaclesLeftTwo}
      obstacleWdith={obstacleWdith}
      obstacleHeight={obstacleHeight}
      randomBottom={obstaclesNegHeightTwo}
      gap={gap}
    /> 
    </View>
    </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

let screenWidth = Dimensions.get("screen").width
let screenHeight = Dimensions.get("screen").height

const styles = StyleSheet.create({
  
  background: {
    flex:1,
    width: screenWidth,
    height: screenHeight,
  },

  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
});
