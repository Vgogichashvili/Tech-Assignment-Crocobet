import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgProxyService {

  constructor(private httpClient:HttpClient) { }

  //იუზერების იფნფორმაციის წამოღება
  getAllUsers():any{
    var fullUrl:string = `https://jsonplaceholder.typicode.com/users`;
    return this.httpClient.get(fullUrl);
  }
//ვწვდებით კონკრეტულ იუზერს აიდის მიხედვით
  getUserDataById(id:number):any{
    var fullUrl:string = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.httpClient.get(fullUrl);
  }
//ვწვდებით პოსტებს მისი იუზერ აიდის მიხედვით
  getPostsById(id:number){
    var fullUrl:string = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    return this.httpClient.get(fullUrl);
  }
}
