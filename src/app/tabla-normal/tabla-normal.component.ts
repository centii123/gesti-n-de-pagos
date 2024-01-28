import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-normal',
  templateUrl: './tabla-normal.component.html',
  styleUrls: ['./tabla-normal.component.css']
})
export class TablaNormalComponent {
  @Input() data!:any[];
  @Input() cols!:any[];
  //data=[{id:1,name:"hola",size:"hola"}, {id:2,name:"sebas",size:"hola2"}];
  //cols:any[] | undefined;


}
