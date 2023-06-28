import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICredential, User } from 'src/app/@core/api/models';
import { AuthService } from 'src/app/@core/services/auth.service';
import { TokenService } from 'src/app/@core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public currentUser: User | undefined;
  form: ICredential = {
    username: '',
    password: '',
  };

  constructor( 
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router ) { }


    public onSubmit(): void {
      this.authService.login(this.form).subscribe(
        data => {
          this.tokenService.saveToken(data.access_token);
          this.router.navigate(['/']);
        }
      );
  
    }
}
