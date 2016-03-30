export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private status: boolean,
        private created: string,
        private modified: string
         
    ){}
}
