import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  url:string="http://localhost:1136/books";

  constructor(private http:HttpClient) { }

  getBooks()
  {
    console.log( this.http.get(`${this.url}/getBookDetails`));
    return this.http.get(`${this.url}/getBookDetails`);
    
  }
  addBooks(id,name,description)
  {
    const obj={
      id,
      name,
      description

    };
    console.log(obj);
    return this.http.post(`${this.url}/book`,obj).subscribe(res => console.log('Done'));;
   
  }
   
  deleteBook(index: number) {
   return this.http.delete(`${this.url}/deleteBook/${index}`).subscribe(res=> console.log("Done")); 
  }
  description:string;
  name:string;
  id:number;
}
