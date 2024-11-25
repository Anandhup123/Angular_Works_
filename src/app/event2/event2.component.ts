import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {

  // odd or even
  count = 0
  num = 0;
  str = "";
  check() {
    if (this.num == 0) {
      this.str = "your entered number is zero"
    }
    else if (this.num % 2 == 0) {
      this.str = " Your entering Number is Even"
    }
    else {
      this.str = "Your entering Number is Odd"
    }
  }

  clear() {
    this.str = ""
    this.num = 0
  }

  // calculation

  calc = {
    v1: 0,
    v2: 0,
    sol: 0,
    div_ans: ""
  }


  vcolor = "black"
  hide = true
  operation = ""


  add() {
    this.calc.sol = this.calc.v1 + this.calc.v2
    this.vcolor = "blue"
    this.hide = false
    this.operation = "Addition"
  }
  substract() {
    this.calc.sol = this.calc.v1 - this.calc.v2
    this.vcolor = "green"
    this.hide = false
    this.operation = "substraction"
  }
  multi() {
    this.calc.sol = this.calc.v1 * this.calc.v2
    this.vcolor = "red"
    this.hide = false
    this.operation = "multiplication "
  }
  division() {
    this.calc.sol = Number((this.calc.v1 / this.calc.v2).toFixed(3))
    this.vcolor = "yellow"
    this.hide = false
    this.operation = "Division"
  }
  reset() {
    this.calc.sol = 0;
    this.calc.div_ans = ""
    this.vcolor = "black"
    this.hide = true
    this.calc.v1 = 0
    this.calc.v2 = 0
  }




  // student mark list

  main_box = true
  closehidden = true
  openhidden = false


  findme() {
    this.main_box = false
    this.closehidden = false
    this.openhidden = true
  }
  closeme() {
    this.main_box = true
    this.closehidden = true
    this.openhidden = false
  }


  validate = {
    name: "",
    mark: 0,
    Grade: "",
    show: true
  }


  validation() {

    this.validate.show = false

    if (this.validate.mark > 100) {
      this.validate.Grade = "Invalid Mark"
    }
    else if (this.validate.mark >= 90) {
      this.validate.Grade = "A+"
    }
    else if (this.validate.mark >= 80) {
      this.validate.Grade = "A"
    }
    else if (this.validate.mark >= 70) {
      this.validate.Grade = "B+"
    }
    else if (this.validate.mark >= 60) {
      this.validate.Grade = "B"
    }
    else if (this.validate.mark >= 50) {
      this.validate.Grade = "C+"
    }
    else if (this.validate.mark >= 40) {
      this.validate.Grade = "C"
    }
    else if (this.validate.mark < 40) {
      this.validate.Grade = "Fail"
    }
    else {
      this.validate.Grade = "Invalid Mark"
    }
  }
  clear1() {
    this.validate.name = ""
    this.validate.show = true
    this.validate.mark = 0
  }

  constructor() { }

  ngOnInit(): void {
  }



  values=0
  ans = ""
  checkOddeven(){
    if(this.values%2==0){
      this.ans = "Even Number"
    }else{
      this.ans ="odd number"
    }
  }
  clearall(){
    this.ans = ""
    this.values=0
  }
  
stdName="";
stdMark?:number;
grade="";
hidedata=false;

ShowGrade(){
  this.hidedata=false;
  if(this.stdMark!>=90){
    this.grade="A+";
  }else if(this.stdMark!>=80){
    this.grade="A";
  }else{
    this.grade="Fail"
  }
}

clearallData(){
this.hidedata=true;
  this.grade=""
  this.stdName=""
  this.stdMark=0
}





flag="ok"


}
