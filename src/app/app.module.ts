import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContentHolderComponent } from './content-holder/content-holder.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    ContentHolderComponent,
    ListBlogComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
