import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookPageComponent } from "./book-page/book-page.component";
import { BooksRoutingModule } from "./books-routing.module";
import { BookReviewComponent } from "./book-review/book-review.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [BookPageComponent, BookReviewComponent],
  imports: [CommonModule, BooksRoutingModule, ReactiveFormsModule]
})
export class BooksModule {}
