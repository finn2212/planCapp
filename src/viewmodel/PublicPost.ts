import { DecimalPipe } from '@angular/common'; 


export class PublicPost {
    id: string;
    userId: string;
    text: string;
    location: string;
    postTime: string;

    constructor(id: string,userId: string, text: string, location: string, postTime: string){
        this.id = id,
        this.userId = userId,
        this.text = text,
        this.location = location,
        this.postTime = postTime
      }
}

