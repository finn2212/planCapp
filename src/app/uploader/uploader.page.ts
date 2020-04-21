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
  firstName: string;

  ngOnInit() {
  }

  savePost(){
    
    this.setUserInformation();
    console.log(this.firstName);
   let publicPost: PublicPost = new PublicPost("postId",this.user.getUserName(),this.postText,"location","jetzt gerade")
    this.postService.addPost(Object.assign({},publicPost));
    this.postText="";
  
  }
  async setUserInformation(){

    var docRef = await this.fireStore.collection("users").doc(this.user.getUID());
  
    await docRef.get().toPromise().then(function(doc) {
      if (doc.exists) {
        this.firstName= doc.data().firstName;
        console.log(doc.data().lastName);  
        console.log(doc.data().location);
        console.log();
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          
      return null;
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
  
      }
  }
    

