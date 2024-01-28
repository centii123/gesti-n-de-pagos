import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TreeNode } from 'primeng/api';

interface Column {
[x: string]: any;
    field: string;
    header: string;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  /*files!: TreeNode[];

  cols!: Column[];
  disabledColumns: string[] = ['size', 'name'];

  totalRecords!: number;

  loading: boolean = false;


  ngOnInit() {
      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];

      this.totalRecords = 1000;

      this.loading = true;
  }

  loadNodes(event: any) {
      this.loading = true;

      setTimeout(() => {
          this.files = [];

          for (let i = 0; i < event.rows; i++) {
              let node = {
                  data: {
                      name: 'Item ' + (event.first + i),
                      size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                      type: 'Type ' + (event.first + i),
                      estado: 1
                  },
                  leaf: false
              };

              this.files.push(node);
          }
          this.loading = false;
      
      }, 250);
  }

  onNodeExpand(event: any) { //expandible
      this.loading = true;

      setTimeout(() => {
          this.loading = false;
          const node = event.node;

          node.children = [
              {
                  data: {
                      name: node.data.name + ' - 0',
                      size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                      type: 'File'
                  }
              },
              {
                  data: {
                      name: node.data.name + ' - 1',
                      size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                      type: 'File'
                  }
              }
          ];

          this.files = [...this.files];
      }, 250);
  }
  shouldDisableEditableColumn(columnField: string): boolean {
    return this.disabledColumns.includes(columnField);
  }*/
  colsex!:any[];
  data!:any[]
  products!:any;
  cols!: Column[];
  first: number = 0;

    rows: number = 10;

    onPageChange(event:any) {
        this.first = event.first;
        this.rows = event.rows;
    }

  loading: boolean = false;
  totalRecords!: number;
  ngOnInit() {
    this.cols = [
        { field: 'name', header: 'Name'},
        { field: 'size', header: 'Size', edit:true},
        { field: 'size', header: 'Size' },
        { field: 'size', header: 'Size', edit:true }
    ];
    this.products=[{id:1,name:"hola",size:"hola"}, {id:2,name:"sebas",size:"hola2"}]
    this.totalRecords = 1000;
    this.loading = false;
}

load() {
    this.loading = true;

    setTimeout(() => {
        this.products=[{id:1,name:"hola",size:"hola"}, {id:2,name:"sebas",size:"hola2"}]
    console.log('mama')
    
    this.loading = false;
    }, 1000);
}

onExpand(event: any) { //expandible
    this.loading = true;

    setTimeout(() => {
        this.colsex=[
            { field: 'name', header: 'Name'},
            { field: 'size', header: 'Size'},
            { field: 'size', header: 'Size'},
        ]
        this.data=[{id:1,name:"hola",size:"hola"}, {id:2,name:"sebas",size:"hola2"}]
        this.loading = false;
    }, 250);
}








}
