import { Component, OnInit } from '@angular/core';
import { PublicPost } from 'src/viewmodel/PublicPost';
import { PostAnswer } from 'src/viewmodel/PostAnswer';
import { PostService } from '../post.service';
import { UserService } from '../user.serive'

@Component({
  selector: 'app-related-posts',
  templateUrl: './related-posts.page.html',
  styleUrls: ['./related-posts.page.scss'],
})
export class RelatedPostsPage implements OnInit {

  publicPosts: Array<PublicPost>
  filterPostsList:Array<PublicPost>
  constructor(public postService: PostService,public user: UserService) {     
    /*this.publicPosts = this.publicPosts.filter(function(post){
      return post.userId == this.user.getUserName()})*/
  }
   
    ngOnInit() {
      const postCollection = this.postService.getPosts()
      postCollection.subscribe( res => {
      this.publicPosts = res;       
      })      
    


    }  

 
 } 

