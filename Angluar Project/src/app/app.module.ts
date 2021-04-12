import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { DiscountComponent } from './discount/discount.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CarComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    DiscountComponent,
    NoDiscountComponent,
    LoginComponent,
    RegisterComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
