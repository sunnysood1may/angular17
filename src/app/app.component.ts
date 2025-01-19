import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';

class abc{
  constructor(){
    console.log("abc constructor called");
  }
  show(){
    console.log("show");
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, RouterLink],
  templateUrl: './app.component.html',
  //template: 'dfdfdf',
  styleUrl: './app.component.css',
  //styles: ['h1 { background-color:orange }']
  preserveWhitespaces: true,
  viewProviders: [abc, Book],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular17';
  name = "sunny";
  isLoggedId: boolean = true;
  login(){
    this.isLoggedId = true;
  }
  logout(){
    this.isLoggedId = false;
  }

  @HostListener('click',['$event'])
  display(){
    //alert("how are you");
  }

  constructor(private _abc: abc, private _book: Book){
    _abc.show();
    console.log("component constructor called");
  }

}