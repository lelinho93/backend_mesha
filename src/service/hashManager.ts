import * as bcrypt from 'bcryptjs'


export class HashManager { //Função para faze ro Hash da senha

    async hash(plainText: string): Promise<string> { // Recebe um texto comum
        const cost: number = Number(process.env.BCRYPT_COST) // Custo de criptografia não pode ser grande pra não gerar lentidão
        const salt: string = bcrypt.genSaltSync(cost) 
        const cypherText: string = bcrypt.hashSync(plainText, salt)
        return cypherText
    }

    async compare(plainText: string, cypherText: string): Promise<boolean>{ // Função para verificar se o hash é o mesmo salvo no Database
        return await bcrypt.compare(plainText, cypherText)
    }
}   