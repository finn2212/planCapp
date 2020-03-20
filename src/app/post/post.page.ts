/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.serive';
import { User } from 'firebase';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

postID: string
user: UserService

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, priavte user: UserService )
   { 
    this.user = user
    
  }

  ngOnInit() {
    this.postID = this.route.snapshot.paramMap.get('id')
    this.afs.doc(`users/${user.getUID()}`)
  }

} */
