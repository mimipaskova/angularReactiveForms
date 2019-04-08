import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "profile",
    loadChildren: "./profile/profile.module#ProfileModule"
  },
  {
    path: "books",
    loadChildren: "./books/books.module#BooksModule"
  },
  {
    path: "**",
    redirectTo: "/books",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
