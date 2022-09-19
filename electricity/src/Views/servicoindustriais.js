import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import Header from "../components/Header";
import Products from "../components/ProductsIndustriais";
import { useLinkProps } from "@react-navigation/native";

export default function Industria({ navigation }) {
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View>
                <Header />
            </View>
            <View>
                <View style={Styles.conteinerProdutos}>
                    <Text style={Styles.textprodut}>Instalações Residenciais</Text>
                    <Products
                        navigation={navigation}

                    />
                </View>
            </View>
        </ScrollView>
    );
}
const Styles = StyleSheet.create({
    conteinerProdutos: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,

        
    },
    textprodut:{
        fontSize:17,
        fontWeight:'400'
    }
})