import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'
import { Router } from '@angular/router'
import { UserService } from '../user.serive'
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

        username: string=""
        password: string=""
        cpassword: string=""

        constructor(public afAuth: AngularFireAuth,
          public alert: AlertController,
          public router: Router,
          public user: UserService
          ) { }

        ngOnInit() {
        }
async register(){

  const{username,password,cpassword} = this 
  if(password !==cpassword){
    this.showAlert("Error!","Password doesnt match")
    return console.error("passwort don't match")
  }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username,password);
      console.log(res)
      this.showAlert("Sucess","Welcome aboard")
      this.router.navigate(['/tabs'])

      this.user.setUser({
				username,
				uid: res.user.uid
			})

    } catch (error) {
      console.dir(error)
      this.showAlert(password, error.message)
    }
}
async showAlert(header: string,message: string){
  const alert = await this.alert.create({
    header,
    message,
    buttons:["Ok"]
  })
  await alert.present()
}

}
