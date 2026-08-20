import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  name = '';
  email = '';
  message = '';
  submitted = false;

  submit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }
    this.submitted = true;
    form.resetForm();
  }
}
