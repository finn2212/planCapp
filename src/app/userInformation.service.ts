import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { UserInformation } from 'src/viewmodel/UserInformation';
import { map } from 'rxjs/operators';




@Injectable ({
    providedIn: 'root'
})

export class UserInformationService {
    private userCollection: AngularFirestoreCollection<UserInformation>

    private users: Observable<UserInformation[]>

     constructor(db: AngularFirestore) {
        this.userCollection = db.collection<UserInformation>('userInformation');
        this.users = this.userCollection.snapshotChanges().pipe(
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
              });
            })
          );
        
     }

getUsers(){
    return this.users
}

getUser(id) {
    return this.userCollection.doc<UserInformation>(id).valueChanges();
  
}

addUser(user: UserInformation) {
    return this.userCollection.add(user)
}
}