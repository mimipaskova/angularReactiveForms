import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-book-review",
  templateUrl: "./book-review.component.html",
  styleUrls: ["./book-review.component.css"]
})
export class BookReviewComponent {
  @Input() reviewForm: FormGroup;
  @Input() index: number;
  @Output() deleteReview: EventEmitter<number> = new EventEmitter();

  delete() {
    this.deleteReview.emit(this.index);
  }
}
