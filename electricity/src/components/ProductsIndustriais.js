import React, { Component } from "react";
import { Image, View, StyleSheet, ScrollView, Pressable, Text, TouchableOpacity } from "react-native";
import Header from "./Header";
export default function ProductsIndustriais({ navigation }, props) {
    return (
        <View style={{backgroundColor:'white'}}>
            <ScrollView>
                <Header />
                <Text style={Styles.textprodut}>Instalações Industriais</Text>
                <Pressable
                    style={Styles.Conteiner}
                    onPress={() => {
                        navigation.navigate("Product");

                    }}>
                    <View style={Styles.Conteinerprodutos}>
                        <Image
                            source={require("../Image/painel.jpg")}
                            style={Styles.produtosimagens} />
                        <View style={Styles.Conteinertextos}>
                            <Text
                                style={Styles.Textoprodutos1}
                            >Montagem e concerto de paineis
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Serviço voltado a montagem de circuitos elétricos e concerto de paineis.
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Eletricistas Disponíveis: 7
                            </Text>
                            <TouchableOpacity style={Styles.conteinerbutton}>
                                <Text
                                    style={Styles.textbutton}>Orçamento
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
                <Pressable
                    style={Styles.Conteiner}
                    onPress={() => {
                        navigation.navigate("Product");

                    }}>
                    <View style={Styles.Conteinerprodutos}>
                        <Image
                            source={require("../Image/soft.jpg")}
                            style={Styles.produtosimagens} />
                        <View style={Styles.Conteinertextos}>
                            <Text
                                style={Styles.Textoprodutos1}
                            >Instação de Soft-Starter e Programação 
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Serviço voltado a instalação de Soft-Starter para controle de surtos de corrente.
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Eletricistas Disponíveis: 5
                            </Text>
                            <TouchableOpacity style={Styles.conteinerbutton}>
                                <Text
                                    style={Styles.textbutton}>Orçamento
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
                <Pressable
                    style={Styles.Conteiner}
                    onPress={() => {
                        navigation.navigate("Product");

                    }}>
                    <View style={Styles.Conteinerprodutos}>
                        <Image
                            source={require("../Image/inversor.jpeg")}
                            style={Styles.produtosimagens} />
                        <View style={Styles.Conteinertextos}>
                            <Text
                                style={Styles.Textoprodutos1}
                            >Instação de Inversores de Frequência 
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Serviço voltado a instalação de inversores para controle do processo produtivo.
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Eletricistas Disponíveis: 2
                            </Text>
                            <TouchableOpacity style={Styles.conteinerbutton}>
                                <Text
                                    style={Styles.textbutton}>Orçamento
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    );
}
const Styles = StyleSheet.create({
    produtosimagens: {
        width: 120,
        height: 120,
        borderRadius: 3,
        marginTop:8,
        marginLeft:8
    },
    Conteinerprodutos: {
        flexDirection: 'row',
        height: 160,
        width: 330,
        justifyContent: 'center',
        marginTop: 13,
        backgroundColor:'white',
        borderRadius:3

    },
    Conteinertextos: {
        width: 200,
        alignItems:'center'
    },
    Textoprodutos: {
        color: '#2F4F4F',
        fontSize: 12,
        padding: 2,
        textAlign:'center',
        fontWeight:'400'


    },
    Textoprodutos1: {
        color: '#2F4F4F',
        fontSize: 15,
        padding: 4,
        fontWeight:'600',
        textAlign:'center'

    },
    Conteiner:{
        backgroundColor:'#00BFFF',
        width:350,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:4.5

    },
    conteinerbutton:{
        backgroundColor:'#00BFFF',
        width:120,
        height:30,
        borderRadius:3,
        justifyContent:'center'
    },
    textbutton:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        fontWeight:'600'
        
    },
    conteinerProdutos: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,

        
    },
    textprodut:{
        fontSize:17,
        fontWeight:'400',
        textAlign:'center',
        marginTop:20
    }
})