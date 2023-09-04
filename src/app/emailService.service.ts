import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private user_id = environment.USER_ID;
  private template_id = environment.TEMPLATE_ID;

  constructor() {
    emailjs.init(this.user_id);
  }

  enviarEmail(nome: string, email: string, phone: string,  mensagem: string) {
    const params = {
      to_name: 'FlexDuck',
      from_name: nome,
      message: mensagem,
      reply_to: email,
      contact_phone: phone,
    };

    return emailjs.send('default_service', this.template_id, params);
  }
}
