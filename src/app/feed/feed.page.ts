import { Component, OnInit } from '@angular/core';
import { PublicPost } from 'src/viewmodel/PublicPost';
import { PostAnswer } from 'src/viewmodel/PostAnswer';
import { AlertController } from '@ionic/angular';
import { PostService } from '../post.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {


 
  publicPosts: Array<PublicPost>
  constructor(public postService: PostService, public alertCtrl: AlertController) {     
    
   }

  ngOnInit() {
   const postCollection = this.postService.getPosts()
   postCollection.subscribe( res => {
   this.publicPosts = res;
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
            this.publicPosts[index].postCommends.push(new PostAnswer("1","Finn",data.answer));
            
          }
        }
      ]
    });

    await alert.present();
  }
 
  }



