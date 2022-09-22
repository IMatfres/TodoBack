import { User } from '../app/boundedContext/backoffice/users/domain/valueObjects/user'
declare global {
    namespace Express {
        export interface  Request {
            userlogueado: Partial<string, any>
        }
    }
}