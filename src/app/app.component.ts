import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //template: 'dfdfdf',
  styleUrl: './app.component.css',
  //styles: ['h1 { background-color:orange }']
})
export class AppComponent {
  title = 'angular17';
}
