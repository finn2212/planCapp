import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string =""
  passwort: string = ""
  constructor(public afAuth:AngularFireAuth) { }

  ngOnInit() {
  }


async login(){
  const { username, passwort} = this
try {
  const res = await this.afAuth.auth.signInWithEmailAndPassword(username,passwort)


} catch (err) {
  console.dir(err)
  if(err.code === "auth/user-not-found"){
    console.log("user not found")
  }
}

    }
}
