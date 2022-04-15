import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgProxyService } from '../services/ng-proxy.service';

@Component({
  selector: 'app-full-user-info-pg',
  templateUrl: './full-user-info-pg.component.html',
  styleUrls: ['./full-user-info-pg.component.css']
})
export class FullUserInfoPgComponent implements OnInit {


  userData!:any
  id!:any
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private proxy:NgProxyService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  //იუზერების წამოღება ვიუზე გადასატანად
  getUserInfo(){
    this.id  = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string)
    this.proxy.getUserDataById(this.id).subscribe((response:any) =>{
      this.userData =response;
    })
  }
 //პოსტების ფეიჯზე გადასვლა
  openPostsBtnClick(id:number){
    this.router.navigate(["UserPosts",id])
  }

//home ფეიჯზე დაბრუნება
  BackToHomePgBtnClicK(){
    this.router.navigate([''])
  }


}
