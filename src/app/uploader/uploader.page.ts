import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { UserService } from '../user.serive';
import {AlertController, LoadingController} from '@ionic/angular';
import { firestore } from 'firebase/app';
import { PublicPost } from 'src/viewmodel/PublicPost';
import { Post, PostService } from '../post.service'

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})


export class UploaderPage implements OnInit {

  postt: Post = {
    id: '12',
    text: 'test',
    userId: 'Ulf'
  }

  constructor(public fireStore: AngularFirestore, public user: UserService, public alert: AlertController, private postService: PostService) { 
  }

  savePost() {
    this.postService.addPost(this.postt)
  }

  postCounter: 0
  myPost: PublicPost;
  postText: string

  ngOnInit() {
  }

  post(){
    this.myPost = new PublicPost("1","Finn",this.postText,"hamburg","12:00");
    
    



      /* const postText = this.postText
      this.fireStore.doc(`users/Kxov1VTzZlNBdqYPI97k6owVtAG3``users/${this.user.getUID()}`).update({
      postText
      }
        )
      
      */
    }
  }
    

