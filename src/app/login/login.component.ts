import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds:DataService) { }

  private UserObj
  ngOnInit(): void {
  }
  onSubmit(loginForm){
    this.UserObj=loginForm.value;

    //validating email
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.UserObj.email)) && this.UserObj.email!=null)
      {
        alert("enter valid email")
      }

    else
    { 
      //sending login details to data service
      this.ds.doLogin(loginForm.value).subscribe((res)=>{

      })

      //resetting login form
      loginForm.reset()
    }
  }

}
