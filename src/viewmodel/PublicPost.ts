import { DecimalPipe } from '@angular/common'; 
import { PostAnswer } from 'src/viewmodel/PostAnswer';


export class PublicPost {
    id: string;
    userId: string;
    text: string;
    location: string;
    postTime: string;
    postCommends: Array<PostAnswer>

    constructor(id: string,userId: string, text: string, location: string, postTime: string){
        this.id = id,
        this.userId = userId,
        this.text = text,
        this.location = location,
        this.postTime = postTime,
        this.postCommends = new Array<PostAnswer>()
      }


      commend(id: string, userId: string, text: string){
        this.postCommends.push(new PostAnswer(id,userId,text))
      }

}

