import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/Services/BooksService/books.service';
import { MatDialog } from '@angular/material/dialog';
import { GetBookComponent } from '../get-book/get-book.component';

interface Item {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {

  public pageSize = 12;
  public currentPage = 0;

  constructor(private books : BooksService, public dialog : MatDialog) { }

  booksArray:any;
  length!:number;
  book:any;
  booksList:any[]=[]

  ngOnInit(): void {
    this.onDisplayBooks();
  }

  items: Item[] = [
    {value: 'Price', viewValue: 'Price'},
    {value: 'LOW-HIGH', viewValue: 'LOW-HIGH'},
    {value: 'HIGH-LOW', viewValue: 'HIGH-LOW'},
  ];


  selectedSortOption: string = 'Price';

  get sortedBooksList() {
    if (this.selectedSortOption === 'LOW-HIGH') {
      return this.booksList.slice().sort((a, b) => a.bookPrice - b.bookPrice);
    } else if (this.selectedSortOption === 'HIGH-LOW') {
      return this.booksList.slice().sort((a, b) => b.bookPrice - a.bookPrice);
    } else {
      return this.booksList;
    }
  }

  onDisplayBooks(){
    this.books.getBooks().subscribe((res:any) => {
      console.log(res.data);
      this.booksArray = res.data;
      this.length = this.booksArray.length;
      console.log('Stored to array variable');
      console.log(this.booksArray);
      setTimeout(() => {
        this.iterator();
      }, 0);
    })
  }

  getBookDetails(book:any){
    const dialogbox = this.dialog.open(GetBookComponent,{
      data:book
    })
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  public iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.booksArray.slice(start, end);
    this.booksList = part;
  }

}
