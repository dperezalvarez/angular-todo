import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
    <form (submit)="handleSubmit()">
      <input [(ngModel)]="title" name="title" placeholder="Añade una nueva tarea" />
      <button type="submit">Añadir</button>
    </form>
  `,
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() add = new EventEmitter<string>();
  title: string = '';

  handleSubmit(): void {
    if (this.title) {
      this.add.emit(this.title);
      this.title = '';
    }
  }
}
