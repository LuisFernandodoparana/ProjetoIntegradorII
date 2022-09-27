export default class Cadastro{
    constructor (data={
        id:0, 
        name: '',
        lastname:'',
        cpf:'',
        date:'',
        email:'',
        number:'',
        image:''
        
    }){
        this.id = data.id
        this.name = data.name
        this.lastname = data.lastname
        this.cpf = data.cpf
        this.date = data.date
        this.email = data.email
        this.number = data.number
        this.image = data.image

    }
    isValidWithOutId(){
        return this.name && this.image && this.lastname && this.cpf && this.date && this.email && this.number
    }
}