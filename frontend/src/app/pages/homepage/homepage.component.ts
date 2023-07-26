import { Component, Input, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/@core/services/toggle.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

public isHeaderVisible: boolean = true
public isCvVisible: boolean = false
public isPortfolioVisible: boolean = false

constructor( private toggleService: ToggleService ) { }

  ngOnInit(): void {
    this.toggleService.isHeaderVisible$.subscribe( data => {
      this.isHeaderVisible = data
      console.log('header3', this.isHeaderVisible)
    })
    this.toggleService.isPortfolioVisible$.subscribe( data => {
      this.isPortfolioVisible = data
      console.log('portfolio', this.isPortfolioVisible)
    })
    this.toggleService.isCvVisible$.subscribe( data => {
      this.isCvVisible = data
      console.log('cv', this.isCvVisible)
    })
  }

} 
