import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartBooksComponent } from '../cart-books/cart-books.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // @ViewChild(CartBooksComponent) cartComponent!: CartBooksComponent;
  // length : any = this.cartComponent.sendLength;
  
  constructor(private router : Router) { }


  ngOnInit(): void {
  }

  

  goToCart(){
    this.router.navigate(['/dashboard/cart'])
  }

}
