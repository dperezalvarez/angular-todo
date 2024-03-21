import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Lista de Tareas</h1>
      <app-todo-form (add)="addTask($event)"></app-todo-form>
      <app-todo-list [todos]="todos" (toggle)="toggleTask($event)" (remove)="removeTask($event)"></app-todo-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  nextId: number = 1;

  addTask(title: string): void {
    this.todos.push({ id: this.nextId++, title, completed: false });
  }

  toggleTask(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTask(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
