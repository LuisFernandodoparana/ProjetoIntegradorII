export default class Cadastro {
    constructor(data = {
        id: 0,
        name: '',
        sobrenome: '',
        cpf: '',
        nascimento: '',
        telefone: '',
        email: '',
        image: ''
    }) {
        this.id = data.id
        this.name = data.name
        this.sobrenome = data.sobrenome
        this.cpf = data.cpf
        this.nascimento = data.nascimento
        this.telefone = data.telefone
        this.email = data.email
        this.image = data.image
    }
    isValidWithOutId() {
        return this.name && this.sobrenome && this.cpf && this.nascimento && this.telefone && this.email &&this.image
    }
}