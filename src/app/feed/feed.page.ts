import { Component, OnInit } from '@angular/core';
import { PublicPost } from 'src/viewmodel/PublicPost';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {


 
  publicPosts: Array<PublicPost> = [
    new PublicPost("42", "Heikos Post", "0815", "Hamburg", "12:01"),
    new PublicPost("43", "Heikos erwrPost", "0dsr815", "Bremen", "12:02"),
    new PublicPost("44", "Der bums läuft Junge!", "Florin", "Hamburg", "13:13")
  ]   

  constructor() {   
    
   }

  ngOnInit() {
  }  
}