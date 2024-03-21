import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    // Declara todos los componentes que tu aplicación utiliza
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
  ],
  imports: [
    // BrowserModule es necesario para aplicaciones que corren en el navegador
    BrowserModule,
    // FormsModule es necesario para usar [(ngModel)] en tus formularios
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Este es el componente raíz que Angular utiliza para iniciar la aplicación
})
export class AppModule { }