import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCardComponent } from './login-card/login-card.component';
import { ContentHolderComponent } from './content-holder/content-holder.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';


const routes: Routes = [
  {
    path: "",
    component: LoginCardComponent
  },
  {
    path: "holder",
    component: ContentHolderComponent,
    children: [
      {
        path: "list-blog/:id",
        component: ListBlogComponent
      },
      {
        path: "create-blog",
        component: CreateBlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
