import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  urlForGraphicalCurrency = `https://api.coingecko.com/api/v3/coins/`;
  getCurrencyUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=`
  getByIdCoin = `https://api.coingecko.com/api/v3/coins/`

  
  constructor(private http: HttpClient) {}



  getCurrency(currency:string){
    return this.http.get<any>(this.getCurrencyUrl + `${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  }





  getTrandingCurrency(currency:string){
    return this.http.get<any>(this.getCurrencyUrl + `${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }





  getGraphicalData(coinId:string, currency:string, days: number){
    return this.http.get<any>(this.urlForGraphicalCurrency + `${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`);
  }





  getCurrencyById(coinId: string){
    return this.http.get<any>(this.getByIdCoin + `${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=false`);
  }


}
