import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { RouterLink, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
   name:string;
   description:string;
   id:number;
  constructor(private service:BookServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  addBook()
  {
    this.service.addBooks(this.id,this.name,this.description);
    this.router.navigateByUrl('/displayAllBooks');
  }
}
