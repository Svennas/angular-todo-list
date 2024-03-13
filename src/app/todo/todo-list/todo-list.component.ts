import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  /*constructor(private readonly todoService: TodoService) {}

  todos = this.todoService.todos;*/

  showCompleted = false;

  todoService = inject(TodoService);

  todos: Todo[] = [];

  async ngOnInit() {
    this.todos = await this.todoService.todos;
  }

  changeShowCompleted() {
    if (this.showCompleted) {
      this.showCompleted = false;
    }
    else {
      this.showCompleted = true;
    }
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

  async newTodo(title: string) {
    await this.todoService.addTodo(title);
    this.todos = await this.todoService.todos;
  }

  filterTodos(todos: Todo[]) {
    const filtered = todos.filter((todo) => todo.completed === this.showCompleted);
    return filtered;
  }
}
