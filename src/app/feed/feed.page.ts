import { Component, OnInit } from '@angular/core';
import { PublicPost } from 'src/viewmodel/PublicPost';
import { PostAnswer } from 'src/viewmodel/PostAnswer';
import { AlertController } from '@ionic/angular';
import { PostService } from '../post.service';
import { Post } from '../post.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
posts: Post[];

 
  publicPosts: Array<PublicPost> = [
    new PublicPost("42", "0815", "Ich benötige hilfe", "Hamburg", "12:01"),
    new PublicPost("43", "Heikos erwrPost", "0dsr815", "Bremen", "12:02"),
    new PublicPost("44", "Der bums läuft Junge!", "Florin", "Hamburg", "13:13")
  ]   

  constructor(public postService: PostService, public alertCtrl: AlertController) {  this.publicPosts[0].postCommends = [
    new PostAnswer("0","Florin","ich kann helfen"),
    new PostAnswer("0","Finn","danke wann denn"),
    new PostAnswer("0","Florin","komme morgen um 12"),
  ] 
  this.publicPosts[1].postCommends = [
    new PostAnswer("0","Florin","ich kann helfen"),
    new PostAnswer("0","Finn","danke wann denn"),
    new PostAnswer("0","Florin","komme morgen um 12"),
  ] 
  this.publicPosts[2].postCommends = [
    new PostAnswer("0","Florin","ich kann helfen"),
    new PostAnswer("0","Finn","danke wann denn"),
    new PostAnswer("0","Florin","komme morgen um 12"),
  ] 
    
   }

  ngOnInit() {
   const postService = this.postService.getPosts()
   postService.subscribe( res => {
   this.posts = res;
   })
 } 

  async presentAlertPrompt(index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Hilfe Anbieten',
      inputs: [      
        {
          name: 'answer',
          id: 'answer',
          type: 'textarea',
          placeholder: 'deine Antwort'
        }        
      ],
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Antworten',
          handler: data => {
            console.log('Confirm Ok');
            this.publicPosts[index].commend("1","Finn",data.answer)
            
          }
        }
      ]
    });

    await alert.present();
  }
 
  }



