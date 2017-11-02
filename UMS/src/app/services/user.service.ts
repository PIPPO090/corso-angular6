import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    users = [
        {
            name: 'Hidran1',
            lastname: 'Arias1',
            email: 'hidran@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Torino',
            phone: '454545455',
            age: 43
        },
        {
            name: 'Hidran2',
            lastname: 'Arias2',
            email: 'hidran@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Torino',
            phone: '454545455',
            age: 43
        },
        {
            name: 'Hidran3',
            lastname: 'Arias3',
            email: 'hidran@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Torino',
            phone: '454545455',
            age: 43
        },
        {
            name: 'Hidran4',
            lastname: 'Arias',
            email: 'hidran@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Torino',
            phone: '454545455',
            age: 43
        }
    ];

    constructor() {
    }

    getUsers() {
        return this.users;
    }

    deleteUser(user) {
        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }
}
