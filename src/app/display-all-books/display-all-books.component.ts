import { Component, OnInit, ɵɵupdateSyntheticHostBinding } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html',
  styleUrls: ['./display-all-books.component.css']
})
export class DisplayAllBooksComponent implements OnInit {

  id:number;
  name:string;
  description:string;
  bookList:Book[]=[];
  book:Book;
  val1:Boolean=false;
  constructor(private service:BookServiceService,private router: Router) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe((data:Book[])=>{
     this.bookList=data;
       console.log(data);
      })
  }
  redirectToUpdate(books)
  {
    this.book=books;
    this.val1=true;
    let index:number=this.bookList.indexOf(books);
    this.id=books.id;
    this.name=books.name;
    this.description=books.description;
      
  }
 
  onclickUpdate()
  {
    this.val1=false;
    this.book.id=this.id;
    this.book.name=this.name;
    this.book.description=this.description;
    if(this.book)
    {
      this.service.addBooks(this.book.id,this.book.name,this.book.description);
    }
    
   }

  onclickDeleteDetails(emp){
    let index:number=this.bookList.indexOf(emp);
  
    let ind:number=this.bookList[index].id;
    this.service.deleteBook(ind);
    this.bookList.splice(index,1);
  }
}
