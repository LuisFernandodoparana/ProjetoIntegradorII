import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from "react-native-vector-icons/FontAwesome5";

import StackNav from "./src/routes/StackNav";
import Categories from "./src/Views/Form";
import Industria from './src/components/ProductsIndustriais';

const Tab = createBottomTabNavigator()

const icons = {
  'Seviços Residenciais': {
    name: "eject",
  },
  'Serviços Industriais': {
    name: "ethernet",
  },
  'Trabalhe Conosco': {
    name: "user-friends",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        ScreenOptions={({ route }) => ({
          tabBaricon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name={"Serviços Residenciais"} component={StackNav} />
        <Tab.Screen name={"Serviços Industriais"} component={Industria} />
        <Tab.Screen name={"Trabalhe Conosco"} component={Categories} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
