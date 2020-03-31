import { Component, OnInit } from '@angular/core';
import { PublicPost } from 'src/viewmodel/PublicPost';
import { PostAnswer } from 'src/viewmodel/PostAnswer';

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.page.html',
  styleUrls: ['./related-posts.page.scss'],
})
export class RelatedPostsPage implements OnInit {



  publicPosts: Array<PublicPost> = [
    new PublicPost("Finn", "Finn", "Kann mir wer helfen?", "Hamburg", "12:01"),
    new PublicPost("43", "Heikos erwrPost", "0dsr815", "Bremen", "12:02"),
    new PublicPost("44", "Der bums läuft Junge!", "Florin", "Hamburg", "13:13")
  ] 
  constructor() {

    this.publicPosts[0].postCommends = [
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
  }

}
