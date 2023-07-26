import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/@core/api/models';
import { ToggleService } from 'src/app/@core/services/toggle.service';
import { TokenService } from 'src/app/@core/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentUser: User | undefined;
  public isAdmin: boolean = false
  public isHeaderVisible: boolean = false
  public isPortfolioVisible: boolean = false
  public isCvVisible: boolean = false

  constructor( 
    private tokenService: TokenService,
    private toggleService: ToggleService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.toggleService.isHeaderVisible$.subscribe( data => {
      this.isHeaderVisible = data
      console.log('header', this.isHeaderVisible)
    })
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
public displayHeader(){
  this.isHeaderVisible = true;
  this.toggleService.setHeaderVisible(this.isHeaderVisible)
  this.hidePortfolio()
  this.hideCv()
  this.router.navigate(['/'])
  console.log('header2', this.isHeaderVisible)
}
public hideHeader(){
  this.isHeaderVisible = false;
  this.toggleService.setHeaderVisible(this.isHeaderVisible)
}
public displayPortfolio(){
  this.isPortfolioVisible = true;
  this.toggleService.setPortfolioVisible(this.isPortfolioVisible)
 this.hideHeader()
 this.hideCv()
 this.router.navigate(['/'])
}
public hidePortfolio(){
  this.isPortfolioVisible = false;
  this.toggleService.setPortfolioVisible(this.isPortfolioVisible)
}
public displayCv(){
  this.hidePortfolio()
  this.hideHeader()
  this.isCvVisible = true;
 this.toggleService.setCvVisible(this.isCvVisible)
 this.router.navigate(['/'])
}
public hideCv(){
  this.isCvVisible = false;
  this.toggleService.setCvVisible(this.isCvVisible)
}
}