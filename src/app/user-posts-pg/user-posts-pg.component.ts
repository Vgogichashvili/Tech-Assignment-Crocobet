import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgProxyService } from '../services/ng-proxy.service';

@Component({
  selector: 'app-user-posts-pg',
  templateUrl: './user-posts-pg.component.html',
  styleUrls: ['./user-posts-pg.component.css']
})
export class UserPostsPgComponent implements OnInit {

  userPosts!:any[]
  userId!:number

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private proxy:NgProxyService) { }

  ngOnInit(): void {  
    this.getUserposts()
  }

//პოსტების წამოღება იუზერ აიდით
  getUserposts(){
    this.userId  = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
    this.proxy.getPostsById(this.userId).subscribe((response:any) =>{
      this.userPosts =response;
    })
  }

  //home ფეიჯზე დაბრუნება
  BackToHomePgBtnClicK(){
    this.router.navigate(['']);
  }

//full user info ფეიჯზე დაბრუნება
  BackToUserInfoPgBtnClick(){
    this.router.navigate(['FullUserInfo',this.userId]);
  }

}
