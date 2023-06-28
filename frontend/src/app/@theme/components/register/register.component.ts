import { Component } from '@angular/core';
import { User } from 'src/app/@core/api/models';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
form: User = {
  username: '',
  password: '',
  email: '',
  admin: false,
  id: 0
};
  constructor(private authService: AuthService) { }

  public onSubmit(): void {
    this.authService.register(this.form).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
  })
}
}