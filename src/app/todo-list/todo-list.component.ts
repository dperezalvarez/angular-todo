import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  template: `
    <table>
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let todo of todos">
          <td [class.completed]="todo.completed">{{ todo.title }}</td>
          <td>
            <button (click)="toggle.emit(todo.id)">Toggle</button>
            <button (click)="remove.emit(todo.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}

