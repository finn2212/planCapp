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

  
  constructor(public fireStore: AngularFirestore, public user: UserService, public alert: AlertController, private postService: PostService) { 
  } 

  postText: string; 

  ngOnInit() {
  }

  savePost(){
    
    console.log(this.postText)
    
   let publicPost: PublicPost = new PublicPost("TestID","Test", this.postText,"testLoaction", "testTime");
    this.postService.addPost(Object.assign({},publicPost));
    this.postText="";
    console.log(this.user.getUserName())
  }
  }
    

