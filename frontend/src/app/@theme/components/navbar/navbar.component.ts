import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/@core/api/models';
import { TokenService } from 'src/app/@core/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentUser: User | undefined;
  public isAdmin: boolean = false ;
  constructor( private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.tokenService.user$
    .subscribe( data => {
      if (data !== null && data !== undefined) {
         this.currentUser = data
         console.log(this.currentUser)
      if (this.currentUser!.admin === true) {
        this.isAdmin = true
        console.log('admin', this.isAdmin)
      }
      }
     
    });
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
