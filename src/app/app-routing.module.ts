import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductCatagoryComponent } from './pages/add-product-catagory/add-product-catagory.component';

const routes: Routes = [

  { path: 'itemList', component: AddProductCatagoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
