export class Name {
    private readonly name: string

    private constructor (name: string){
        this.name = name
        Object.freeze(this)
    }

    static create (name: string){
        if(!Name.validate(name)){
            return "Erro de validação"
        }
        return new Name(name)
    }

    get value (): string {
        return this.name
    }

    static validate (name: string): boolean {
        if(!name || name.trim().length < 2 || name.trim().length > 255){
            return false
        }
        return true
    }

}