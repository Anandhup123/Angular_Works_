import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project_1';
  


colorvalue ="green"











  sec1_data = {
    titlename: "ANGULAR FRONTEND TOOL",
    subtitle: "framework of java script",
    text: "fully written in type script",
    date: 2009,

  }

  titlename = "angular"
  img1 = "assets/images/my_image.png";

  //style binding 

  bg = "yellow"
  value = "100px"
  text = "white";

  unique = "#966e00"

  // property binding 

  styles = {
    'background-color': 'blue',
    'color': 'white',
    'font-style': 'italic',
    'font-weight':'600'
  }

  // ng styles

  set() {
    let csscode = {
      'background-color': 'red',
      'color': 'blue',
      'font-weight': '800',
      'font-style': 'italic'
    };
    return csscode;
  }
  name = "Anandhu"


  // condition based binding

  ph = 10.2;

  //style binding example

  imgs1 = "assets/images/ img1.jpeg"
  img2 = "assets/images/img2.jpeg"
  img3 = "assets/images/img3.JPG"
  student_data_style = "display: flex;"



  // class binding
  mixed = ['n1', 'n2', 'n4'];

}

