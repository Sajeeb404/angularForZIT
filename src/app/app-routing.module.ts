import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductCategoryComponent } from './pages/add-product-catagory/add-product-catagory.component';

const routes: Routes = [

  { path: 'itemList', component: AddProductCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
