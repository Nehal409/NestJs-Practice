export class ContactModel{
    constructor( 
        public conactId: string,
        public date: string,
        public name: string,
        public email: string, 
        public phone:string, 
        public subject: string, 
        public  message:string
        ){}

}