import Cadastro from '../models/cadastro'
import Idatabase from '../services/Idatabase'

export default class Database{
    constructor(){
        this.table_name = 'cadastros'
        this.db = new Idatabase('Cadastrosdata.db', (db) => {
            db.executeQuery(`CREATE TABLE IF NOT EXISTS ${this.table_name}(id integer primary key autoincrement, name text, lastname text, number text, email text, cpf text, date text);`, () => {}, (error) => {console.log(error)})
            console.log("Banco de dados iniciado")
        })
    }
    loadCadastro(){
        return new Promise(resolve => {
            this.db.executeQuery(`SELECT * FROM ${this.table_name}`, (_, res) => {
                resolve(res.rows._array)
            }, (e)=>console.log(e))
        })
    }

    addNewCadastro(cadastro = new Cadastro()){
        return new Promise(resolve => {
            if(cadastro.isValidWithOutId()){
                const query = `INSERT INTO ${this.table_name} (name, lastname, number, cpf, email, date) VALUES ('${cadastro.name}', ${cadastro.lastname}, '${cadastro.cpf}', '${cadastro.email}', '${cadastro.number}', '${cadastro.date}');`
                this.db.executeQuery(query, ()=>resolve(true), (_)=>{console.log(_); resolve(false)})
            }else resolve(false)
        })
    }

}
