import { DecimalPipe } from '@angular/common';
import { PublicPost } from 'src/viewmodel/PublicPost';

export class User {
    id: string;
    name: string;
    email: string;
    location: string;
    ownPosts: Array<PublicPost>;
    answeredPosts: Array<PublicPost>;


    constructor(id: string, name: string, email: string, location: string ){
      this.id = id,
      this.name = name,
      this.email = email,
      this.location = location,
      this.ownPosts = new Array<PublicPost>(),
      this.answeredPosts = new Array<PublicPost>()
    }

}