export class roles{
    cliente?: boolean;
    admin?: boolean; 
}

export  class Usuario {
    constructor (
    
        _id: string,
        name: string,
        email: string,
        rol: string,
        password: string
    ) {}
 }