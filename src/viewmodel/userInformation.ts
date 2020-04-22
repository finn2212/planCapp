import { PostAnswer } from 'src/viewmodel/PostAnswer';


export class UserInformation  {
  id: string;
  firstName: string;
  lastName: string;
  location: string;
  
 
  constructor(id: string,firstName: string, lastName:string, location: string){
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.location = location
  } 

}