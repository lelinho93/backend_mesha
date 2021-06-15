import { user } from "../model/User"
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase { // Responsável por fazer a inserção do usuário no banco de dados, camada de DATA

    private static TABLE_NAME = "login_mesha_system"
    
   
    async create(id: string, email: string, password: string){
        try { 
            await this.getConnection().insert({
            id,
            email,
            password
        }).into(UserDataBase.TABLE_NAME)
    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

    async getUserByEmail(email: string): Promise<user> {

        try {
            const result = await this.getConnection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({email})

            if(!result[0]){
                throw new Error("Usuário não encontrado em nosssa base de dados!")
            }

            return {
                id: result[0].id,
                email: result[0].email,
                password: result[0].password
            }
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}