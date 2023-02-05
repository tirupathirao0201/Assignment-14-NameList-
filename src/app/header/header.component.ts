import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {


  name :string = "Enter your name";
  description : string ="Enter description";
  nameValue :string ='';
  descValue :string ='';
  listOfValues :object[]=[];
  subarr :string[]=[]
  nameEvent :any;
  descEvent :any;
  constructor(private userservice:UserService){};
  handleName(event:Event){
      this.nameValue = (<HTMLInputElement>event.target).value;
      this.nameEvent = (<HTMLInputElement>event.target)
  }
  handleDesc(event : Event){
    this.descValue = (<HTMLInputElement>event.target).value;
    this.descEvent = (<HTMLInputElement>event.target)

  }
  handleClick(){
    if (this.nameValue !='' && this.descValue !=''){
      this.listOfValues.push([this.nameValue,this.descValue])
    }
    this.userservice.func(this.listOfValues);
    this.descValue='';
    this.nameValue='';
    this.descEvent.value=null;
    this.nameEvent.value=null;
    console.log(this.listOfValues);
  }

}
