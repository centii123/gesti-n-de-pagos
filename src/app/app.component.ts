import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-pagos';
  products=[{
    code:"ggg",
    name:"name",
    category:"ggg",
    quantity:"quantity"
  }]
}
