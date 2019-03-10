
export interface JwtResponseI {

    dataUser: {
        id: number,
        name: string,
        email: string,
        password: string,
        accessToken: string,
        expiresIn: string
    }
 }