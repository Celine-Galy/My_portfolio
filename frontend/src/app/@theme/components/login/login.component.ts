import { Component, OnInit } from '@angular/core';
import { ICredential } from 'src/app/@core/api/models';
import { AuthService } from 'src/app/@core/services/auth.service';
import { TokenService } from 'src/app/@core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: ICredential = {
    username: '',
    password: '',
  };

  constructor( 
    private authService: AuthService,
    private tokenService: TokenService) { }

  ngOnInit(): void {}

    public onSubmit(): void {
      this.authService.login(this.form).subscribe({
        next: (data) => (
          console.log('data', data.access_token),
          this.tokenService.saveToken(data.access_token)
        ),
        error: (err) => console.log(err),
      });
  
    }
}
