import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpsService } from '../HttpService/https.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  token : any;
  base = environment.baseUrl;
  constructor(private httpService : HttpsService) {
    this.token= localStorage.getItem('token');
  }

  addToCart(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.PostService(this.base+`Cart/AddToCart?bookId=`+reqData.bookId,{}, true, header);
  }

  getCartBooks(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.GetService(this.base+`Cart/CartItemsList`, true, header);
  }

  removeBookFromCart(id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.DeleteService(this.base+`Cart/DeleteCartItem?id=` +id, true, header )
  }

  removeAllBooksFromCart(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.DeleteService(this.base+`Cart/DeleteCartItems`, true, header )
  }
}
