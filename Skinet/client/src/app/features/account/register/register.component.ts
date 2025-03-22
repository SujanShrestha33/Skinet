import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AccountService } from '../../../core/services/account.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { JsonPipe } from '@angular/common';
import { TextInputComponent } from "../../../Shared/components/text-input/text-input.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    JsonPipe,
    MatError,
    TextInputComponent
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);
  private router = inject(Router);
  private snack = inject(SnackbarService)
  validationErrors?: string[];

  registerFomr = this.fb.group({
    firstName: ['', Validators.required],
    secondName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit(){
    this.accountService.register(this.registerFomr.value).subscribe({
      next: () => {
        this.snack.success("Reg Successfull");
        this.router.navigateByUrl("/account/login")
      },
      error: errros => this.validationErrors = errros
    })
  }
}
