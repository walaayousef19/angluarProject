import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { LoginComponent } from './login/login.component';
import { NoDiscountComponent } from './no-discount/no-discount.component';
import { NotesComponent } from './notes/notes.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {path:'',redirectTo:'/Products',pathMatch:'full'},
    {path:'Products',component:ProductsComponent,
    children:[
      {path:'Discount',component:DiscountComponent},
      {path:'NoDiscount',component:NoDiscountComponent}
    ]},
    {path:'Users',component:UsersComponent},
    {path:'Posts',component:PostsComponent},
    {path:'Login',component:LoginComponent},
    {path:'Register',component:RegisterComponent},
    {path:'Note',component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
