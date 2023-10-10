import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CateGoryModel } from 'src/app/models/cateGoryModel';
import { AddproductCategoryService } from 'src/app/services/addproduct-category.service';

@Component({
  selector: 'app-add-product-catagory',
  templateUrl: './add-product-catagory.component.html',
  styleUrls: ['./add-product-catagory.component.css']
})


export class AddProductCategoryComponent implements OnInit{


  cateGory!:CateGoryModel;
  cateGoryForm!:FormGroup;
  cateGoryList!:CateGoryModel[];

  
    constructor(private router:Router, private fb: FormBuilder, private cateGorService:AddproductCategoryService){}

     ngOnInit(): void {

      this.cateGoryForm = new FormGroup({
      id: new FormControl(),
      english_name:new FormControl(''),
      bangla_name:new FormControl(''),
      seuquence_number:new FormControl(''),
      status:new FormControl(),
    })

    this.cateGorService.getCategory(this.cateGory).subscribe((res:any)=>{
      this.cateGoryList = res;    
               
    })
  }


  submit(){
  this.cateGorService.postCategory(this.cateGoryForm.value).subscribe(() => {alert("success")})
  window.location.reload();
  }


  delete(id:any){
    const confirmed = confirm("Are you sure you want to delete this category?");
      if (confirmed) {
      this.cateGorService.delteByid(id).subscribe(()=>{
        alert("Delete Success");
      })
    }
    window.location.reload();
  }


  getById(cate: CateGoryModel){
    // this.cateGorService.getCategoryById(id).subscribe(()=>{
    // })

    this.cateGoryForm = new FormGroup({
      id: new FormControl(cate.id),
      english_name:new FormControl(cate.english_name),
      bangla_name:new FormControl(cate.bangla_name),
      seuquence_number:new FormControl(cate.seuquence_number),
      status:new FormControl(cate.status),
    })


  }


  



  UserListSearch:any;
  oderHeader:string="";
  isDescOrder:boolean=true;

  sort(headerName:string){
    this.isDescOrder= !this.isDescOrder;
  this.oderHeader=headerName; 
  }

  title ='pagination'
POSTS:any;
page:number =1;
count:number =0;
tableSize:number =5;
tableSizes:any=[5,10,15,20];

onTableSizechange(event:any){
  this.page= event;
  this.cateGoryList;
}

pagenUmber(){
  this.tableSize
}
  

  
}
