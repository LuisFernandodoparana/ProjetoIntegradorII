import React, { Component } from "react";
import { Image, View, StyleSheet, ScrollView, Pressable, Text, TouchableOpacity } from "react-native";
export default function Products({ navigation }, props) {
    return (
        <View>
            <ScrollView>
                <Pressable
                style={Styles.Conteiner}
                    onPress={() => {
                        navigation.navigate("Product");
                    
                    }}>
                    <View style={Styles.Conteinerprodutos}>
                        <Image
                            source={require("../Image/tomada.jpeg")}
                            style={Styles.produtosimagens} />
                        <View style={Styles.Conteinertextos}>
                            <Text
                                style={Styles.Textoprodutos1}
                            >Instação de Tomadas e Interruptores
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Serviço voltado a troca ou instalação de novas tomadas e interruptores para luminarias.
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
                            source={require("../Image/chuveiro.jpeg")}
                            style={Styles.produtosimagens} />
                        <View style={Styles.Conteinertextos}>
                            <Text
                                style={Styles.Textoprodutos1}
                            >Instação de Chuveiros Elétricos
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Serviço voltado a instalação de chuveiros e troca da resistência.
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Eletricistas Disponíveis: 6
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
                            source={require("../Image/ventilador.jpeg")}
                            style={Styles.produtosimagens} />
                        <View style={Styles.Conteinertextos}>
                            <Text
                                style={Styles.Textoprodutos1}
                            >Instação de Ventiladores de Teto
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Serviço voltado a instalação de novos ventiladores ou a subtituição de antigos.
                            </Text>
                            <Text
                                style={Styles.Textoprodutos}
                            >Eletricistas Disponíveis: 3
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
        
    }
})

