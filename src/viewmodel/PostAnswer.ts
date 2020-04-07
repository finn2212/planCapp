import { DecimalPipe } from '@angular/common';

export class PostAnswer {
    id: string;
    userId: string;
    text: string;

    
    constructor(id: string,userId: string, text: string){
      this.id = id,
      this.userId = userId,
      this.text = text      
    } 

}