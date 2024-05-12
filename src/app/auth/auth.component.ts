import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
loginForm!: FormGroup;

constructor(private fb: FormBuilder){
  this.loginForm=this.fb.group({
    user_id: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    company_id: new FormControl('',Validators.required),

  })
}
  onSubmit() {
    if (this.loginForm.valid) {
    console.log(this.loginForm.value);
    }
    else this.loginForm.markAllAsTouched
  }
}
