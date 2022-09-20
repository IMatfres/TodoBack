import { User } from '../../../users/domain/valueObjects/user'
import { UserEmail } from '../valueObjects/userEmail';
export interface LoginRepository {
    
    searchByEmail(email: UserEmail): Promise<User | null>;

}
