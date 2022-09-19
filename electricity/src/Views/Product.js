import React, { Component } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
export default function Product() {
    return (
        <View style={Styles.HeaderProduct}>
            <View>
                <Text style={Styles.ProductTitle}>Soft-Starter</Text>
            </View>
            <View style={Styles.ConteinerProduct}>
                <View>
                    <Image
                        style={Styles.ImageProduct}
                        source={require('../Image/soft.jpg')}
                    />
                </View>
                <View style={Styles.Conteudo}>
                    <Text style={Styles.TextProduct}>
                        Esse serviço e realizado apenas por eletricistas industriais e o seu preço varia se for preciso construir infraestrutura para a instalação de 1 soft-starter.
                    </Text>
                    <Text style={Styles.TextProduct}>
                        Valor:R$802,10
                    </Text>
                    <View style={Styles.ButtonProduct}>
                        <TouchableOpacity>
                            <Text style={Styles.TextButton}>Marcar Reunião</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    HeaderProduct: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    ProductTitle: {
        fontSize: 20,
        color: 'black'
    },
    ConteinerProduct: {
        flexDirection: 'row'
    },
    ImageProduct: {
        width: 150,
        height: 150,
        borderRadius:3
    },
    TextProduct: {
        fontSize: 13,
        color: 'black',
        marginLeft:5,
        marginBottom:5
    },
    ButtonProduct: {
        width: 145,
        height: 35,
        backgroundColor: '#00BFFF',
        borderRadius:3,
        justifyContent:'center'

    },
    TextButton: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',

    },
    Conteudo:{
        width:150,
        height:250,
        alignItems: 'center',

    },
})