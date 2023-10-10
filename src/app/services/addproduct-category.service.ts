import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CateGoryModel } from '../models/cateGoryModel';



const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class AddproductCategoryService {


  
private urls ='http://localhost:8080/category';

  constructor(private httpService:HttpClient, ) { }


 public postCategory(post: CateGoryModel){
   return this.httpService.post(this.urls +"/post", post, httpOptions);
  }

  public getCategory(post: CateGoryModel){
return this.httpService.get(this.urls +"/get", httpOptions)
  }

  public getCategoryById(id: any){
    return this.httpService.get(this.urls +"/getById/"+id , httpOptions)
  }

  public delteByid(id:any){
    return this.httpService.delete(this.urls+ "/deleteById/"+ id, httpOptions);

  }




}
