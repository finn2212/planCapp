import { Component, OnInit } from '@angular/core';
import { PublicPost } from 'src/viewmodel/PublicPost';
import { PostAnswer } from 'src/viewmodel/PostAnswer';
import { PostService } from '../post.service';

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.page.html',
  styleUrls: ['./related-posts.page.scss'],
})
export class RelatedPostsPage implements OnInit {

  publicPost: Array<PublicPost>

  
  constructor(public postService: PostService,) {

   }

  ngOnInit() {
    const postCollection = this.postService.getPosts()
    postCollection.subscribe( res => {
    this.publicPost = res;
    })
  }

}
