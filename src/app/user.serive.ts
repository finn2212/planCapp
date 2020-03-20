import {Injectable} from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import {first} from 'rxjs/operators'
import { auth } from 'firebase/app'


interface user{
  username: string,
  uid
}

@Injectable()
export class UserService{
  private user: user

  constructor(private afAuth: AngularFireAuth){

  }
setUser(user: user){
  this.user
}
  

async isAuthenticated() {
  if(this.user) return true

  const user = await this.afAuth.authState.pipe(first()).toPromise()

  if(user) {
    this.setUser({
      username: user.email,
      uid: user.uid
    })

    return true
  }
  return false
}


  getUID(){
    return this.user.uid
  }
}