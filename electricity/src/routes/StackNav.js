import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../Views/Home";
import Product from "../Views/Product";
import Header from "../components/Header";

const { Navigator, Screen} = createNativeStackNavigator();

export default function StackNav(){
    return(
        <Navigator>
            <Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
            }}
            />
            <Screen name="Product" component={Product} options={{
                title:"Detalhes do Serviço"
            }}/>
        </Navigator>
    )
}