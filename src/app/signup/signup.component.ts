import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ds:DataService) { }
    dates=[];
  ngOnInit(): void {
    var d=new Date();
    for(var i=2010;i<d.getFullYear()+4;i++){
      this.dates.push(i);
    }

  }
  private UserObj

  validate(obj):boolean{

      // vaidating name
      if(obj.name!=null && obj.name.length<3){
        alert("enter valid name")
        return false;
      }

      //validating email
      else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(obj.email)) && obj.email!=null)
      {
        alert("enter valid email")
        return false;
      }

      //validating year
      else if(obj.passoutyear==""){
        alert("choose graduation completion year")
        return false;
      }

      //validating passwords
      else if(obj.password!=obj.rpassword ){
        alert("passwords do not match")
        return false;
      }

      //validating passwords length
      else if(obj.password.length<6 && obj.password!=null){
        alert("entered password is less than 6 characters..\n please provide password with atleast 6 characters")
        return false;
      }

      //returning true if all elements are validated
      return true;
  }

  onSubmit(signUpForm){
    this.UserObj=signUpForm
    
    //if form is valid 
    if(this.validate(signUpForm.value)){
    console.log(signUpForm.value)

    //sending user details to to data service
      this.ds.addUser(signUpForm.value).subscribe((res)=>{

      })

    //resetting form
    this.UserObj.reset();
    }
  }

}
