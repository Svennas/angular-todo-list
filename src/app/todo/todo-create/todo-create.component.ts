import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent {
  /*todoService = inject(TodoService);
  router = inject(Router);
  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }

  addTodo() {
    this.todoService.addTodo(
      this.todoForm.value.name,
    );
    this.router.navigate(['todo']);
  }*/

  @Output('newTodo') newTodo = new EventEmitter<string>();

  todo: string = '';

  submit() {
    this.newTodo.emit(this.todo);
  }
}
