import knex from "knex";

export abstract class BaseDataBase { // Conexão com o banco de dados através da lib KNEX

    getConnection(){
        return knex({
            client: "mysql",
            connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
            
            }
        })
    }
}