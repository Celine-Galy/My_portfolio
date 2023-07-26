import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToggleService } from 'src/app/@core/services/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public isPortfolioVisible: boolean = false
  public isCvVisible: boolean = false
  public isHeaderVisible: boolean = false

constructor( private toggleService: ToggleService) { }

ngOnInit(): void {
  this.toggleService.isHeaderVisible$.subscribe( data => {
    this.isHeaderVisible = data
    console.log('header', this.isHeaderVisible)
  })
}

public hideHeader(){
  this.isHeaderVisible = false;
  this.toggleService.setHeaderVisible(this.isHeaderVisible)

}
public displayPortfolio(){
  this.isPortfolioVisible = true;
  this.toggleService.setPortfolioVisible(this.isPortfolioVisible)
  this.hideHeader()

}
public displayCv(){
  this.isCvVisible = true;
  this.toggleService.setCvVisible(this.isCvVisible)
  this.hideHeader()
}
}
