import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  myPost

  constructor(public fireStore: AngularFirestore, public alertController: AlertController) { 
    this.myPost = this.fireStore.doc(`users/Kxov1VTzZlNBdqYPI97k6owVtAG3`).valueChanges()
    this.showAlert(this.myPost, "toll")
  }



  ngOnInit() {
    
  }

  async showAlert(header: string,message: string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:["Ok"]
    })
    await alert.present()
  }

}
