import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    this.router.navigate(['/dashboard/books'])
  }

}
