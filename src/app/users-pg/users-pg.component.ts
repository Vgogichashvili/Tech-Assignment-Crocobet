import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgProxyService } from '../services/ng-proxy.service';

@Component({
  selector: 'app-users-pg',
  templateUrl: './users-pg.component.html',
  styleUrls: ['./users-pg.component.css']
})
export class UsersPgComponent implements OnInit {
  userData!:any
  constructor(private proxy:NgProxyService,private router:Router) { }
  ngOnInit(): void {
    this.getAllUsers();
   }
 
   //იუზერების წამოღება
   getAllUsers(){
     this.proxy.getAllUsers().subscribe((response:any) =>{
       this.userData = response;
     })
   }
 //full user info ფეიჯზე გადასვლა
   userInfoBtnClick(id:number){
     this.router.navigate(['FullUserInfo',id]);
     
   }

}
