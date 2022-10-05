import Cadastro from '../models/cadastro'
import LDatabase from './ldatabase'

export default class Database{
    constructor(){
        this.table_name = 'cadastros'
        this.db = new LDatabase('Cadastrosdata.db', (db) => {
            db.executeQuery(`CREATE TABLE IF NOT EXISTS ${this.table_name}(id integer primary key autoincrement, name text, sobrenome text, cpf text, nascimento text, telefone text, email text, image text);`, () => {}, (error) => {console.log(error)})
            console.log("Banco de dados iniciado")
        })
    }
    loadAnuncios(){
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name}`, (_, res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })
    }

    addNewCadastro(cadastro = new Cadastro()){
        return new Promise(resolve => {
            if(cadastro.isValidWithOutId()){
                const query = `INSERT INTO ${this.table_name} (name, sobrenome, cpf, nascimento, telefone, email, image) VALUES ('${cadastro.name}', ${cadastro.sobrenome}, '${cadastro.cpf}', '${cadastro.nascimento}', ${cadastro.telefone}, ${cadastro.email}, ${cadastro.image});`
                this.db.executeQuery(query, ()=>resolve(true), (_)=>{console.log(_); resolve(false)})
            }else resolve(false)
        })
    }

}
