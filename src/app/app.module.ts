import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { TablaNormalComponent } from './tabla-normal/tabla-normal.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    TablaNormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TreeTableModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
