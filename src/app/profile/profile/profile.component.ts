import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this._fb.group({
      firstName: [{ value: "Ivan", disabled: true }],
      lastName: [{ value: "Ivanov", disabled: true }],
      location: [" "],
      friends: this._fb.array([this.initFriendSection()])
    });
  }

  addFriend() {
    const control = this.getFormArray("friends");
    control.push(this.initFriendSection());
  }

  removeFriend(index) {
    const currentFriend = this.getFormArray("friends");
    currentFriend.removeAt(index);
  }

  onSubmit() {
    console.log("save");
  }

  getFormArray(control: string): FormArray {
    return this.profileForm.get(control) as FormArray;
  }

  initFriendSection() {
    return this._fb.group({
      nickname: [""],
      city: [""]
    });
  }
}
