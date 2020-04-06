import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

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