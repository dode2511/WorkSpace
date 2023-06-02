import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "bercario_noite", "root", "dode2511", {
  dialect: "mysql",
  host: "localhost",
  port: 3406
  
});