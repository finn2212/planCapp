import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { UserService } from '../user.serive';
import {AlertController} from '@ionic/angular';
import { firestore } from 'firebase/app';
import { Post } from 'src/viewmodel/Post';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})


export class UploaderPage implements OnInit {
  constructor(public fireStore: AngularFirestore, public user: UserService, public alert: AlertController) { 
  }

  postCounter: 0
  myPost: Post = new Post()
  postText: string

  ngOnInit() {
  }

  post(){
    // this.myPost.id = this.postCounter
    this.myPost.userId = "1"
    this.myPost.text = this.postText

    
    this.postCounter ++



      /* const postText = this.postText
      this.fireStore.doc(`users/Kxov1VTzZlNBdqYPI97k6owVtAG3``users/${this.user.getUID()}`).update({
      postText
      }
        )
      
      */
    }
  }
    

