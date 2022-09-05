import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedCurrency: string = 'RUB'

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {}


  sendCurrency(currencyEvent: string){
    console.log(currencyEvent);
    this.currencyService.setCurrency(currencyEvent)
  }


}
