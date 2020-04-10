import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.serive'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit { 
  
  
  
  constructor(public fireStore: AngularFirestore, public alertController: AlertController,public user: UserService) { 
    
   
  }

 
  ngOnInit() {
    
  }

}
