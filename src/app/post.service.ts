import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { PublicPost } from 'src/viewmodel/PublicPost';
import { map } from 'rxjs/operators';




@Injectable ({
    providedIn: 'root'
})

export class PostService {
    private postsCollection: AngularFirestoreCollection<PublicPost>

    private posts: Observable<PublicPost[]>

     constructor(db: AngularFirestore) {
        this.postsCollection = db.collection<PublicPost>('PublicPostWithCommends');
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
    return this.postsCollection.doc<PublicPost>(id).valueChanges();
}

addPost(post: PublicPost) {
    return this.postsCollection.add(post)
}
}