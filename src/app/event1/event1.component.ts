import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component implements OnInit {
  events="background-color: bisque; width: 800px; height: 1200px; text-align: center;"

// counter
count=0;

counter(){
  this.count++;
}

// advanced counter

public value=0;
pre=0
// counting up
count_up(){
  this.value++;
  this.pre=this.value
}
// counting down
count_down(){
  this.value--;
  this.pre=this.value
}
// reset to zero
reset(){
  this.value=0;
}
preview(){ 
  this.value=this.pre
}

change=""
changeToRed(){
  this.change='red'
}
colorRemove(){
  this.change=""
}



// color changing box

public color=""
thiscolor=""
boxstyle="width:200px; height:200px; border:1px solid black; text-align:center; margin-left:325px; margin-top:50px"
change1(thiscolor:string){
this.color=thiscolor
}


// opacity

op:number=0.5
co=""
red(){
  this.co="red"
}
blue(){
  this.co="blue"
}
green(){
  this.co="green"
}

opacity_up(){
  this.op=this.op+0.05
}
opacity_down(){
  this.op=this.op-0.05
}
opacity_Max(){
  this.op=1
}
opacity_Min(){
  this.op=0.05
}




// mouse movement

hover="width:100px; height: 100px; cursor: pointer; float:left;margin:20px; margin-left:350px;"
bg1='blue'

mouseevent1(){
this.bg1="black"
}
mouseevent2(){
  this.bg1='blue'
}








  constructor() { }

  ngOnInit(): void {
  }

}
