import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {


  data={
    username:"",
    email:"",
    password:"",
    phone:""
  }


  
  signin={
    email:"",
    password:"",
    confirm_password:""
  }
  signinSubmit(){}




  onsubmit(){   

  }
  constructor() { }

  ngOnInit(): void {
  }









  demo={
    Name:"",
    Password: "",
    email:""
  }



  onsubmit1(){
    alert('Your entered name = '+ this.demo.Name  + "\n"
    + "Your entered Email = " + this.demo.email + "\n" 
    + "---Login Successful---");
  }
}
