import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import drawer1 from "./screens/drawer/drawer1";
import drawer2 from "./screens/drawer/drawer2";



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



export default function App() {

  const HomeStack = ()=>
      <Stack.Navigator>
           <Stack.Screen name={"Screen 1"} component={Screen1}/>
           <Stack.Screen name={"Screen 2"} component={Screen2}/>
      </Stack.Navigator>

  return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name={"Home"} children={HomeStack}/>
            <Drawer.Screen name={"Drawer1"} component={drawer1}/>
            <Drawer.Screen name={"Drawer2"} component={drawer2}/>
          </Drawer.Navigator>
        </NavigationContainer>
  );
}


