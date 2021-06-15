import { v4 } from 'uuid'

export class IdGenerator { // Simples gerador de ids sem possibilidad real de colisão de ids.
    generate(): string {
        return v4()
    }
}
