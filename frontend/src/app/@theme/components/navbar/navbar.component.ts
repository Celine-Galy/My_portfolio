import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/@core/api/models';
import { TokenService } from 'src/app/@core/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   public currentUser: User | undefined

  constructor( private tokenService: TokenService ) { }

  ngOnInit(): void {
   this.tokenService.user$.subscribe({
      next: (data) => (
        this.currentUser = data
      ),
      error: (err) => console.log(err),
  })
}
public mailTo(): void {
  const email = 'celinegaly63@gmail.com'
  window.location.href = 'mailto:' + email;
}
public logout(): void {
  localStorage.removeItem('access_token');
  window.location.reload();
}
}
