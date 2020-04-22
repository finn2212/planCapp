import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../user.serive';
import { AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {

  username: string =""
  password: string = ""
  constructor(
    public afAuth:AngularFireAuth,
    public router: Router,
    public user: UserService,
    public db: AngularFirestore
    ) { }

  ngOnInit() {
  }


async login(){
    const { username, password} = this
    try {
      
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username,password)        
        
        if(res.user) {          
          this.user.setUser({
            username,
            uid: res.user.uid
          })

         
          this.router.navigate(['/tabs/feed'])
        }
       
    } catch (err) {
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("user not found")
      }
    }    
    if(this.user){
      this.user.setUserInformation();
    }

    }

}
