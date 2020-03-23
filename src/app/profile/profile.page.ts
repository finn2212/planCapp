import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Post } from 'src/viewmodel/Post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // myPost

  myPost: Post = new Post()
  posts: Post[]

  constructor(public fireStore: AngularFirestore, public alertController: AlertController) { 
    this.myPost.id = "42"
    this.myPost.text = "Heikos Post"
    this.myPost.userId = "0815"

    /*
    this.fireStore.doc(`users/Kxov1VTzZlNBdqYPI97k6owVtAG3`)
    .valueChanges()
    .subscribe(data => {
      this.myPost = data // data = {postText: "hallo finn", postTexts: "testtst"}
   })
    */

    /*
    this.fireStore.collection('posts')
      .snapshotChanges()
      .subscribe(data => {
        this.posts = data.map(post => {
          return {
            id: post.payload.doc.id,
            ...post.payload.doc.data()
          } as Post;
        });
     });
     */
  }



  ngOnInit() {
    
  }

  async showAlert(header: string,message: string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:["Ok"]
    })
    await alert.present()
  }

}
