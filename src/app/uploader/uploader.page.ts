import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.serive';
import {AlertController} from '@ionic/angular';
import { PublicPost } from 'src/viewmodel/PublicPost';
import {PostService } from '../post.service' 
import { UserInformationService } from '../userInformation.service';
import { UserInformation } from 'src/viewmodel/UserInformation';

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
    private postService: PostService, 
    public userInformationService:UserInformationService ) { 
  } 

  postText: string; 
  firstName: string;
  userInformation: Array<UserInformation>

  ngOnInit() {
    const userCollection = this.userInformationService.getUsers()
    userCollection.subscribe( res => {
    this.userInformation = res;
    })
  }

  savePost(){
    
    let user = this.getUserInformation()
    let publicPost: PublicPost = new PublicPost("postId",user.firstName +" "+ user.lastName,this.postText,user.location,"jetzt gerade")
    this.postService.addPost(Object.assign({},publicPost));
    this.postText="";
  
  }

 getUserInformation(){
  return this.userInformation.find(userInformation => userInformation.id = this.user.getUID())
 }
  }
    

