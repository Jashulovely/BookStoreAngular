import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/Services/CartService/cart.service';


@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})
export class GetBookComponent implements OnInit {

  bookId:any;
  bookName:any;
  authorName:any;
  bookDetails:any;
  bookPrice: any;
  bookRating:any;
  bookImage:any;
  


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogbox : MatDialogRef<GetBookComponent>,
      private _snackBar: MatSnackBar,
      private cart : CartService
      ) { 
        this.bookId = data?.bookId,
        this.bookName = data?.bookName,
        this.authorName = data?.authorName,
        this.bookDetails = data?.bookDetails,
        this.bookPrice = data?.bookPrice,
        this.bookRating = data?.bookRating,
        this.bookImage = data?.bookImage
        console.log(data);
      }

  ngOnInit(): void {
  }

  openSnackBar() {
    let reqData = {
      bookId : this.bookId
    }
    this.cart.addToCart(reqData).subscribe((res:any)=>{
      console.log("Added to Cart..........");
      console.log(res);
    });
    this._snackBar.open('Added to Cart Successfully...!', 'OK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  
  
}
