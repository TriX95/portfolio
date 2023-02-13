import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-email-js',
  templateUrl: './email-js.component.html',
  styleUrls: ['./email-js.component.css']
})

export class EmailJsComponent {

  public sendEmail(e: Event) {
      e.preventDefault();
      emailjs.sendForm('service_le49av8', 'template_portfolio', e.target as HTMLFormElement, 'A_DOJt17OB4Ff1Ahr')
        .then((result: EmailJSResponseStatus) => {
          alert("Email bol odoslaný")
        }, (error) => {
          alert("Email sa nepodarilo odoslať");
        });
    }
      
  }
