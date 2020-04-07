import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { User } from 'src/viewmodel/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit { 
  
  user: User;

  constructor(public fireStore: AngularFirestore, public alertController: AlertController) { 
    this.user = new User("1","Finn","finn.stolle@web.de","Hamburg")
   
  }
  ngOnInit() {
    
  }

}
