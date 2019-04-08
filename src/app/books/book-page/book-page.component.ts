import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-book-page",
  templateUrl: "./book-page.component.html",
  styleUrls: ["./book-page.component.css"]
})
export class BookPageComponent implements OnInit {
  booksForm: FormGroup;

  friendsForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.booksForm = this._fb.group({
      title: ["Everything"],
      author: ["Nicola"],
      rating: [4],
      reviews: this._fb.array([])
    });
  }

  addReview() {
    const control = this.getFormArray("reviews");
    control.push(this.initReviewSection());
  }

  removeReview(index) {
    const currentFriend = this.getFormArray("reviews");
    currentFriend.removeAt(index);
  }

  onSubmit() {
    console.log("save");
  }

  getFormArray(control: string): FormArray {
    return this.booksForm.get(control) as FormArray;
  }

  initReviewSection() {
    return this._fb.group({
      title: [""],
      text: [""],
      rating: [""]
    });
  }
}
