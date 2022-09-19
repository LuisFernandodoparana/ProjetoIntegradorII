import React, { Component } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
export default function Header() {
    return (
        <ScrollView>
            <View style={estilo.conteinerheader}>
                <Text style={estilo.texto1}>Soluções Eletricas em Londrina</Text>
                <TouchableOpacity>
                    <Icon name="search" size={25} color="black" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const estilo = StyleSheet.create({
    texto1: {
        fontSize: 20,
        color: 'black',

    },
    conteinerheader: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50,
        backgroundColor: '#00BFFF',
        flex:1
    }
})