import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/User'


export class TokenManager {

    generate(id: string): string { // este authenticator recebe as informações e devovle um token de acesso para o usuário autenticar no sistema

        return jwt.sign( //recebe um id, uma chave, e um valor para definir tempo de expiração do token
            {id}, 
            process.env.JWT_KEY as string, 
            {expiresIn: process.env.JWT_EXPIRES_TIME || "1d" })            
            
        
    }
    get(token: string): AuthenticationData { // responsavel por verificar se o token
        const payload = jwt.verify(token, process.env.JWT_KEY as string)
        return payload as AuthenticationData
    }
}