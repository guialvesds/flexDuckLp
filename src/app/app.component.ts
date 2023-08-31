import { Component } from '@angular/core';
import { EmailService } from './emailService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flexDuckLp';

  public name!: string;
  public email!: string;
  public message!: string;

  public success: boolean = false;
  public error: boolean = false;

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.emailService
      .enviarEmail(this.name, this.email, this.message)
      .then(() => {
        console.log('E-mail enviado com sucesso!');
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 4000);
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 4000);
      });
  }
}
