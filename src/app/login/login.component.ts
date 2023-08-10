import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users = [{'email':'alexa55@gmail.com','pass':'Cupcake7'},{'email':'moltenjones@gmail.com','pass':'Bronze33'},{'email':'briannaban@gmail.com','pass':'Hammer64'}];
  email = "";
  pass = "";

  constructor(private router: Router){}

  itemClicked(){
    for (let i=0;i<this.users.length;i++){
      if(this.email == this.users[i].email && this.pass == this.users[i].pass){
           this.router.navigateByUrl('/account');
      }
    }
  }
}
