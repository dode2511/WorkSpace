import { express } from "express";
import { sequelize } from "./database/conecte";

const app = express()
const port = 3000



async function conecta_db(){
    try{
        await sequelize.authenticate();
        console.log('conecao estabelicida');
    } catch(error) {
   console.log('nao foi possivel conectar com o banco de dados',error);
    }
}

conecta_db()







app.get('/', (req,res) => {
    res.send('aula1')
})


app.listen(port,()=>{
    console.log("rodando na porta: ",port);
})

