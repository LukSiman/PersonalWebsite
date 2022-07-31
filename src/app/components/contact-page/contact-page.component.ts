import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { CustomValidator } from 'src/app/validators/custom-validator';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      fullName: ['', [Validators.required, CustomValidator.notOnlyWhitespace]],
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      comment: ['', [Validators.required, Validators.minLength(10), CustomValidator.notOnlyWhitespace]]
    });
  }

  get fullName() { return this.formGroup.get('fullName'); }
  get email() { return this.formGroup.get('email'); }
  get comment() { return this.formGroup.get('comment'); }

  // submits the message to email service
  onSubmit(formGroup: FormGroup) {
    console.log(formGroup)
    this.emailService.postMessage(formGroup).subscribe(response => {
      location.href = 'https://mailthis.to/confirm';
      console.log(response);
    });
  }

  // clears the form
  formCleaner(){
    this.formGroup.reset();
  }
}