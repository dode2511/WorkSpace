import { DataTypes } from "sequelize";
import { sequelize } from "../database/conecte";


export const Produto = sequelize.define('Produto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false
    },
    marca:{
        type: DataTypes.STRING,
    },
    quant:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco:{
        type: DataTypes.REAL,
        allowNull: false
    },
})