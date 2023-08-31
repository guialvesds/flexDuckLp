import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private user_id = 'Sav0Eb5WjwqVKg5Fi';
  private template_id = 'template_f7uwblp';

  constructor() {
    emailjs.init(this.user_id);
  }

  enviarEmail(nome: string, email: string, phone: string,  mensagem: string) {
    const params = {
      to_name: 'Destinatário',
      from_name: nome,
      message: mensagem,
      reply_to: email,
      contact_phone: phone,
    };

    return emailjs.send('default_service', this.template_id, params);
  }
}
