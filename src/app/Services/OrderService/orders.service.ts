import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpsService } from '../HttpService/https.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  token : any;
  base = environment.baseUrl;
  constructor(private httpService : HttpsService) {
    this.token= localStorage.getItem('token');
  }

  addToOrders(reqData : any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.PostService(this.base+`Orders/AddToOrders`, reqData, true, header);
  }
}
