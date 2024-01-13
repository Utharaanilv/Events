import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


BASE_URL='http://localhost:3000'

  constructor(private http:HttpClient) { }

handleError(error:HttpErrorResponse){
  let errMsg:string=''

  if(error.error){
    errMsg=`Error:${error.message}`
  }
  else{
    errMsg=`Status:${error.status}`
  }
}


  get(sortColumn:string,order:string){

let url=`${this.BASE_URL}/events?`
if(sortColumn && order){
  url=`${url}_sort=${sortColumn}& _order=${order}`
}

   return this.http.get(url)
  }
}
