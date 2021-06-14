import React ,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './MainStack';
const Stack = createStackNavigator();
function Routes(props){
  const{userData} =props
    return(
        <NavigationContainer>
      <Stack.Navigator>
       {MainStack()}
      </Stack.Navigator>
      </NavigationContainer>
    )
}
export default Routes