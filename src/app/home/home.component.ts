import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  allEvents:any=[]
  sortingControl= new FormControl('')
  searchControl=new FormControl('')

constructor(private api:ApiService){}
  ngOnInit(): void {
  this.getApi("","","");

  this.sortingControl.valueChanges.subscribe((value)=>{
    if(value){
      this.doSorting(value);
    }

  })
  }

  doSorting(value:string){
    let sortColumn:string=""
    let order:string=""
    if(value==='id-by-asc'){
      sortColumn='id ';
      order='asc';

    }else if(value==='id-by-desc'){
      sortColumn='id ';
      order='desc';

    }else if(value==='category-by-asc'){
      sortColumn='category';
      order='asc';

    }else if(value==='category-by-desc'){
      sortColumn='category';
      order='desc';

    }
    this.getApi(sortColumn,order,'');

  }
 



getApi(sortColumn:string,order:string, searchKey:string){
  this.api.get(sortColumn,order).subscribe({
    next:(data)=>{
      console.log(data);
      this.allEvents=data
      
    },
    error:(err:any)=>{
      console.log(err.message);
      
    }
  })
}

}
