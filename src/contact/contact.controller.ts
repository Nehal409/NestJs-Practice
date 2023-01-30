import {Controller,Post, Body, Get, Param} from '@nestjs/common';
import { ContactService } from './contact.service';


@Controller('contact')
export class ContactController {
    constructor(private readonly ContactService:ContactService){}
    
    @Post()
    contactUs(  
        @Body('date') contDate:string,
        @Body('name') contname:string,
        @Body('email') contemail:string,
        @Body('phone') contphone:string,
        @Body('subject') contSubject:string,
        @Body('message') contMessage:string,
        ):any{
      const generatedId = this.ContactService.contactUs(
        contDate,contname,contemail,contphone,contSubject,contMessage)

      return {id: generatedId,name: contname}  
    }


    @Get()
    getContactInfo(){
      return this.ContactService.getContacts()
    }



    @Get(':contId')
    getSpecificInfo(@Param('contId') contId:string){
      return this.ContactService.getSingleContact(contId)
    }

}    


