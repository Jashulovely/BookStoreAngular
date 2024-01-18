import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/AddressService/address.service';
import { CartService } from 'src/app/Services/CartService/cart.service';
import { OrdersService } from 'src/app/Services/OrderService/orders.service';



interface Item {
  value: string;
  viewValue: string;
}

interface IBook{
  bookName: string,
  authorName: string,
  bookPrice: number,
  bookImage: string,
  bookQuantity:number
}

interface ICatrBooks{
  bookName: string,
  authorName: string,
  bookPrice: number,
  bookImage: string,
  bookQuantity:number
}


@Component({
  selector: 'app-cart-books',
  templateUrl: './cart-books.component.html',
  styleUrls: ['./cart-books.component.scss']
})
export class CartBooksComponent implements OnInit {

  
  
  constructor(
    private cart : CartService,
    private _snackBar: MatSnackBar,
    private addressService : AddressService, 
    private router : Router,
    private order : OrdersService
    ) { }
  

  booksArray:IBook[]=[];
  cartItems: ICatrBooks[]=[];
  length:any;
  book:any;
  cartBook:any;
  id:any;
  cartId : any;
  bookPrice:any;
  bookQuantity:any;
  

  ngOnInit(): void {
    this.onDisplayCartBooks();
  }

  visible:boolean=false;

  goToOrder(booksArray:any){
    this.visible = true;
    booksArray.forEach((book : any) => {
      let reqData = {
          cartId : book.cartId,
          bookName : book.bookName,
          bookPrice : book.bookPrice,
          bookQuantity : book.bookQuantity
      }
      this.order.addToOrders(reqData).subscribe((res : any) => {
          console.log(res.message);
      });
      this._snackBar.open('Added to Orders Successfully...!', 'OK', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    });
    
    this.cart.removeAllBooksFromCart().subscribe((res:any) => {
      console.log(res.message);
    });
  }

  goToPlaceOrder(){
    this.router.navigate(['/dashboard/order']);
    this._snackBar.open('Order Placed Successfully...!', 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  
  

  items: Item[] = [
    {value: 'Hyderabad', viewValue: 'Hyderabad'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Banglore', viewValue: 'Banglore'},
  ];


  onDisplayCartBooks(){
    this.cart.getCartBooks().subscribe((res:any) => {
      console.log(res.data);
      this.booksArray = res.data;
      this.cartItems = this.booksArray;
      console.log('cartItem',this.cartItems);
      this.length = this.booksArray.length;
      console.log('Stored to array variable');
      console.log(this.booksArray);
    });
  }

  onRemoveCartBook(book:any){
     this.id = book.cartId
    this.cart.removeBookFromCart(this.id).subscribe((res:any) => {
      console.log(res.message);
      console.log(book);
    });
    this._snackBar.open('Removed from Cart Successfully...!', 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  selectedQuantity: number = 1; // Initial quantity
  minQuantity: number = 1; // Minimum quantity allowed

  incrementQuantity(book: IBook): void {
    book.bookQuantity++;
  }

  decrementQuantity(book: IBook): void {
    if (book.bookQuantity > this.minQuantity) {
      book.bookQuantity--;
    }
  }


  panelTitle: string = 'Address Details'; // Initial title

  onPanelOpened(): void {
    this.panelTitle = 'Customer Details';
  }

  onPanelClosed(): void {
    this.panelTitle = 'Address Details';
  }

  addressForm = new FormGroup({
    fullName : new FormControl('',[Validators.required]),
    mobNo : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    city : new FormControl('',[Validators.required]),
    state : new FormControl('',[Validators.required])
  });

  onAddress(){
    console.log(this.addressForm)
    let data={
      custName : this.addressForm.value.fullName,
      custMobNo : parseInt(this.addressForm.value.mobNo),
      address : this.addressForm.value.address,
      city : this.addressForm.value.city,
      state : this.addressForm.value.state
    }
    this.addressService.addAddress(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
    })
  }

  onHome(){
    this.router.navigate(['/dashboard/books']);
  }
  
}
