import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.serive';
import {AlertController} from '@ionic/angular';
import { PublicPost } from 'src/viewmodel/PublicPost';
import {PostService } from '../post.service' 

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  
  constructor(
    public fireStore: AngularFirestore, 
    public user: UserService, 
    public alert: AlertController, 
    private postService: PostService,  ) { 
  } 

  postText: string; 
  firstName: string;
  location: string = "";
  name: string = "";
  ngOnInit() {
   this.location =  this.user.getUserInformation().location
   this.name = this.user.getUserInformation().firstName

  }

  savePost(){
    this.location =  this.user.getUserInformation().location
   this.name = this.user.getUserInformation().firstName
  
    let publicPost: PublicPost = new PublicPost("postId",this.user.userInformation.firstName +" "+ this.user.userInformation.lastName ,this.postText,this.user.userInformation.location ,"jetzt gerade")
    this.postService.addPost(Object.assign({},publicPost));
    this.postText="";
  
  }


  }
    

