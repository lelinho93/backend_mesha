import { connection } from '../index'

// Camada que gerencia do endpoint de signup na camada DATA da arquitetura

export default async function signupData(  
    id: string,
    email: string,
    password: string,
) {    
    await connection.insert({
        id,
        email,
        password,         
    }).into('login_mesha_system')
}
