import { Component } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [EmployeeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  num1 = 200;
  num2 = 300;

  isvalid = true;
  onchange(val:any){
    this.isvalid = val;
  }

  employees: any[] =[
    {id: 100, name: 'arun'},
    {id: 101, name: 'birbala'},
    {id: 102, name: 'sunny'},
    {id: 103, name: 'shilpa'},
    {id: 104, name: 'shobhit'},
  ]

  cdata: any = "";
  getdata(val:any){
    // alert("123");
     this.cdata = val;
   }

}