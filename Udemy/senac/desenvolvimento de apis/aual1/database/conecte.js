import { Sequelize } from "sequelize";

export const sequelize = new Sequelize9({
    dialect: 'sqlite',
    Storage: './database/estoque.db3'
})