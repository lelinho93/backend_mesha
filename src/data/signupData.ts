import { connection } from '../index'


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
