import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from '../user.serive';
import {AlertController} from '@ionic/angular';
import { AngularFirestore} from '@angular/fire/firestore';
import { UserInformation } from 'src/viewmodel/UserInformation';
import { UserInformationService } from '../userInformation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

        username: string="";
        password: string="";
        cpassword: string="";
        firstName: string="";
        lastName: string="";
        location: string="";

        constructor(public afAuth: AngularFireAuth,
          public alert: AlertController,
          public router: Router,
          public user: UserService,
          public db: AngularFirestore,
          public userService: UserInformationService
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
      this.setUserInformation();

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
  await alert.present();
}
 setUserInformation(){

  let userInformation: UserInformation = new UserInformation(this.user.getUID(),this.firstName,this.lastName,this.location)
  this.userService.addUser(Object.assign({},userInformation));
 }
}
