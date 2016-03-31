export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private status: number,
        private created: Date,
        private modified: Date
         
    ){}
}
