import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { DisplayAllBooksComponent } from '../display-all-books/display-all-books.component';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id:number;
  name:string;
  description:string;
  
  //book:Book;
  bookList:Array<Book>=[];
  private display:DisplayAllBooksComponent;
  constructor(private service:BookServiceService,private router:Router) { }
  ngOnInit(): void {
  }
  onClickAddDetails()
  {
    // this.book.name=this.name;
    // this.book.cost=this.cost;
    // this.book.author=this.author;

    this.display.book.name="bjkb";
    this.display.book.id=this.service.id;
    this.display.book.description=this.service.description;
    
    this.router.navigate(['./displayAllBooks']);
  }
}
