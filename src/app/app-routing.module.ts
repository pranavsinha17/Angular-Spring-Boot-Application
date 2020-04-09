import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAllBooksComponent } from './display-all-books/display-all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  {
    path:"displayAllBooks",component:DisplayAllBooksComponent
  },
  {
    path:"addBook",component:AddBookComponent
  },
  {
    path:"updateBook",component:UpdateBookComponent
  },
  {
    path:' ',redirectTo:'/displayAllBooks',pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
