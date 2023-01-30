import {Injectable, NotFoundException} from '@nestjs/common';
import { ContactModel } from './contact.model';


@Injectable()
export class ContactService{
    private contact:ContactModel[]=[];

    contactUs(date: string, name: string, email: string,  phone:string,
         subject: string,   message:string){
        const contId = Math.random().toString();    
        const newContact = new ContactModel(contId,date
         ,name,email, phone,subject, message)
         
        this.contact.push(newContact);
        return contId;
          
    }

    getContacts(){
        return[...this.contact];
    }

    getSingleContact(conId:string){
        const contacts = this.findContact(conId);
        return {...contacts} ;
    }

    // middleware method use in any method inside this class
    private findContact(id:string){
        const contactid = this.contact.find((cont)=>cont.conactId === id);
        if(!contactid){
            throw new NotFoundException('Cant find user!');
        }
        return contactid
    }

}