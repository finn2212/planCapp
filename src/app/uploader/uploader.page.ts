import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { UserService } from '../user.serive';
import {AlertController} from '@ionic/angular';
import { firestore } from 'firebase/app';
import { PublicPost } from 'src/viewmodel/PublicPost';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})


export class UploaderPage implements OnInit {
  constructor(public fireStore: AngularFirestore, public user: UserService, public alert: AlertController) { 
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
    

