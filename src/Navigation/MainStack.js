import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import navigationStrings from "../constants/navigationStrings";
import { HomeScreen ,ScoreScreen,PlayerListScreen} from "../Screens/index";
const Stack=createStackNavigator();
export default function(){
  return(
    <>
    <Stack.Screen
      name={navigationStrings.HomeScreen}
      options={{ headerShown: false }}
      component={HomeScreen}
    />  
    <Stack.Screen
      name={navigationStrings.ScoreScreen}
      options={{ headerShown: false }}
      component={ScoreScreen}
    />  
    <Stack.Screen
      name={navigationStrings.PlayerListScreen}
      options={{ headerShown: false }}
      component={PlayerListScreen}
    /> 
      </>
  )
}