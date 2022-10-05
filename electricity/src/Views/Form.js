import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import Cadastro from "../models/cadastro";
import DatabaseClass from "../services/database";
import ImagePicker from "../components/ImagePicker";
class Categories extends Component {
    constructor(props) {
        super(props)
        this.db = new DatabaseClass()
        this.navigation = props.navigation
        this.state = {
            cadastro_name: '',
            cadastro_sobrenome: '',
            cadastro_cpf: '',
            cadastro_nascimento: '',
            cadastro_telefone: '',
            cadastro_email: '',
            cadastro_image: ''
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={Styles.Conteiner}>
                    <View>
                        <Text>Dados Pessoais</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={Styles.InputOne}>
                                <Text>Nome</Text>
                                <TextInput placeholder="Digite o nome" onChangeText={text => this.setState({ cadastro_name: text })} />
                            </View>
                            <View style={Styles.InputOne}>
                                <Text>Sobrenome</Text>
                                <TextInput placeholder="Digite o sobrenome" onChangeText={text => this.setState({ cadastro_sobrenome: text })} />
                            </View>
                            <View style={Styles.ConteinerInputTwo}>
                                <View style={Styles.InputTwo}>
                                    <Text>CPF</Text>
                                    <TextInput placeholder="Digite o CPF" onChangeText={text => this.setState({ cadastro_cpf: text })}/>
                                </View>
                                <View style={Styles.InputTwo}>
                                    <Text>Nascimento</Text>
                                    <TextInput placeholder="Digite o Nascimento" onChangeText={text => this.setState({ cadastro_nascimento: text })}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.ConteinerFone}>
                        <Text>Contato</Text>
                        <View>
                            <View style={Styles.InputOne}>
                                <Text>Telefone</Text>
                                <TextInput placeholder="Digite o telefone" onChangeText={text => this.setState({ cadastro_telefone: text })} />
                            </View>
                            <View style={Styles.InputOne}>
                                <Text>E-mail</Text>
                                <TextInput placeholder="Digite o E-mail" onChangeText={text => this.setState({ cadastro_email: text })} />
                            </View>
                        </View>
                        <View>
                            <Text>Foto do Rosto</Text>
                            <ImagePicker title="Carregar foto" usePhotoFromLibrary={true} onTakePhoto={(uri) => this.setState({ cadastro_image: uri })} />
                            <ImagePicker title="Tirar foto" saveCameraImage={true} onTakePhoto={(uri) => this.setState({ cadastro_image: uri })} />
                        </View>

                        {this.state.cadastro_image ?
                            <View>
                                <Image style={{ marginVertical: 10, alignSelf: 'center', width: '100%', height: 250 }} source={{ uri: this.state.cadastro_image }} />

                            </View>
                            :
                            <Text>Nenhuma imagem carregada!</Text>
                        }
                    </View>
                    <View style={{ width: 300, alignItems: 'center' }}>
                        <Pressable style={Styles.Button} onPress={this.add_address}>
                            <Text style={Styles.ButtonText}>Cadastrar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        )
    }
    add_address = (() => {
        let cadastro = new Cadastro({
            name: this.state.cadastro_name,
            sobrenome: this.state.cadastro_sobrenome,
            cpf: this.state.cadastro_cpf,
            nascimento: this.state.cadastro_nascimento,
            telefone: this.state.cadastro_telefone,
            email: this.state.cadastro_email,
            image: this.state.cadastro_image
        })
        if (!cadastro.isValidWithOutId()) {
            alert('Por favor preencha todos os campos!')
            return
        }
        this.db.addNewCadastro(cadastro).then(result => {
            if (result) {
                this.navigation.pop()
                this.sendCadastroNotification(cadastro)
            } else alert("Erro ao cadastrar os dados pessoais! referentes a" + cadastro.name)
        })
    }).bind(this)
}
export default Categories;
const Styles = StyleSheet.create({
    Conteiner: {
        width: '100%',
        height: '100%',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
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
    Button: {
        width: 300,
        height: 40,
        borderRadius: 2,
        backgroundColor: '#2F4F4F',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 9,
        marginLeft: 8
    },
    ButtonText: {
        color: 'white'
    }
})