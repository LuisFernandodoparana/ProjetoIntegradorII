import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
export default function Categories() {
    return (
        <View style={Styles.Conteiner}>
            <View>
                <Text>Dados Pessoais</Text>
                <View style={{ alignItems: 'center'}}>
                    <View style={Styles.InputOne}>
                        <Text>Nome</Text>
                        <TextInput placeholder="Digite o nome" />
                    </View>
                    <View style={Styles.InputOne}>
                        <Text>Sobrenome</Text>
                        <TextInput placeholder="Digite o sobrenome" />
                    </View>
                    <View style={Styles.ConteinerInputTwo}>
                        <View style={Styles.InputTwo}>
                            <Text>CPF</Text>
                            <TextInput placeholder="Digite o CPF" />
                        </View>
                        <View style={Styles.InputTwo}>
                            <Text>Nascimento</Text>
                            <TextInput placeholder="Digite o Nascimento" />
                        </View>
                    </View>
                </View>
            </View>
            <View style={Styles.ConteinerFone}>
                <Text>Contato</Text>
                <View>
                    <View style={Styles.InputOne}>
                        <Text>Telefone</Text>
                        <TextInput placeholder="Digite o telefone" />
                    </View>
                    <View style={Styles.InputOne}>
                        <Text>E-mail</Text>
                        <TextInput placeholder="Digite o E-mail" />
                    </View>
                </View>
            </View>
            <View style={{width:300, alignItems:'center'}}>
                <Pressable style={Styles.Button}>
                    <Text style={Styles.ButtonText}>Cadastrar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    Conteiner: {
        width: '100%',
        height: '100%',
        color: 'white',
        alignItems: 'center',
        justifyContent:'center'
    },
    InputOne: {
        borderWidth: 1,
        width: 300,
        margin: 5,
        padding: 3

    },
    ConteinerInputTwo: {
        flexDirection: 'row',
        width: 300,
        margin: 5,
        justifyContent: 'space-between',
    

    },
    InputTwo: {
        width: '48%',
        borderWidth: 1,
        padding: 3
    },
    ConteinerFone: {
        width: 300,
        borderTopWidth: 1,
        marginTop: 15,
        


    },
    Button:{
        width:300,
        height:40,
        borderRadius:2,
        backgroundColor:'#2F4F4F',
        alignItems:'center',
        justifyContent:'center',
        marginTop:9,
        marginLeft:8
    },
    ButtonText:{
        color:'white'
    }
})