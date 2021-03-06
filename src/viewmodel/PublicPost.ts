import { PostAnswer } from 'src/viewmodel/PostAnswer';


export class PublicPost  {
  id: string;
  userId: string;
  text: string;
  location: string;
  postTime: string;
  postCommends: PostAnswer[];
 
  constructor(id: string,userId: string, text: string,location: string, postTime: string){
    this.id = id,
    this.userId = userId,
    this.text = text,
    this.location = location,
    this.postTime = postTime   
    this.postCommends = new Array<PostAnswer>()
  } 

}