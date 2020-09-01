import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

 async onRegister() {
    const {email, password} = this.registerForm.value;
    try {
      const user = await this.auth.register(email, password);
      if (user) {
        // Redirect to homepage
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
