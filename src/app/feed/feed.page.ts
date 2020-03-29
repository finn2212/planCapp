import { Component, OnInit } from '@angular/core';
import { PublicPost } from 'src/viewmodel/PublicPost';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  publicPost: PublicPost = new PublicPost()
  publicPosts: Array<PublicPost> = new Array

  constructor() {
    this.fillPost("42", "Heikos Post", "0815", "Hamburg", "12:01")
    this.fillPost("43", "Heikos erwrPost", "0dsr815", "Bremen", "12:02")
    this.fillPost("44", "Der bums läuft Junge!", "Florin", "Hamburg", "13:13")
   }

  ngOnInit() {
  }

  fillPost(postId: string, text: string, userId: string, location: string, postTime: string) {
    this.publicPost.postId = postId
    this.publicPost.text = text
    this.publicPost.userId = userId
    this.publicPost.location = location
    this.publicPost.postTime = postTime
    this.publicPosts.push(this.publicPost)
  }

}
