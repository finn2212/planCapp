import {Injectable} from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import {first} from 'rxjs/operators'
import { UserInformationService } from './userInformation.service'
import { UserInformation } from 'src/viewmodel/UserInformation'


interface user{
      username: string,
      uid: string
    }

@Injectable()
export class UserService{
      private user: user;      
      userInformation: UserInformation;
      userInformations: Array<UserInformation> 
      constructor(private afAuth: AngularFireAuth,public userInformationService:UserInformationService){

      }
    setUser(user: user){
      this.user = user
      this.setUserInformation();
    } 
    
    
    setUserInformation(){
      const userCollection = this.userInformationService.getUsers()
      userCollection.subscribe( res => {
     this.userInformations = res;
      })    
      this.userInformation = this.userInformations.find(userInformation => userInformation.id = this.getUID())
    }
    
    getUserName():string{
      return this.user.username
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
      getUserInformation(){
        return this.userInformation;
      }

      getUID():string{
        return this.user.uid
      }
    }