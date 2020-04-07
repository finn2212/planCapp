import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

export interface Post {
    id: string;
    userId: string;
    text: string;
}


@Injectable ({
    providedIn: 'root'
})

export class PostService {
    private postsCollection: AngularFirestoreCollection<Post>

    private posts: Observable<Post[]>

     constructor(db: AngularFirestore) {
        this.postsCollection = db.collection<Post>('posts');
        this.posts = this.postsCollection.snapshotChanges().pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
        
     }

getPosts(){
    return this.posts
}

getPost(id) {
    return this.postsCollection.doc<Post>(id).valueChanges();
}

addPost(post: Post) {
    return this.postsCollection.add(post)
}
}