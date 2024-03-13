import { Injectable, inject } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoId = 1;
  private todoList: Todo[] = [
    {
      id: this.todoId++,
      title: 'serve the app',
      completed: true,
    },
    {
      id: this.todoId++,
      title: 'familiarise yourself with the codebase',
      completed: false,
    },
    {
      id: this.todoId++,
      title: 'start talking to the api',
      completed: false,
    },
  ];

  http = inject(HttpClient);

  get todos(): Promise<Todo[]> {
    // @ts-ignore
    return firstValueFrom(this.http.get(`${environment.apiUrl}/todo`));
  }

  // TODO replace with a get request
  //todos: Promise<Todo[]> = Promise.resolve(this.todoList);

  async addTodo(title: string): Promise<Todo> {
    const todo = await firstValueFrom(
      this.http.post(`${environment.apiUrl}/todo`, {
        title: title,
        completed: false,
      })
    );
    // @ts-ignore
    return todo;
  }

  /*async addTodo(title: string): Promise<Todo> {
    // TODO: replace with a POST request
    const todo = {
      id: this.todoId++,
      title: title,
      completed: false,
    };
    this.todoList.push(todo);

    return todo;
  }*/

  async updateTodo(updatedTodo: Todo): Promise<Todo> {
    const todo = await firstValueFrom(
      this.http.put(`${environment.apiUrl}/todo/${updatedTodo.id}`, updatedTodo)
    );
    // @ts-ignore
    return todo;
  }

  // async updateTodo(updatedTodo: Todo): Promise<Todo> {
  //   // TODO: replace with a PUT request
  //   const foundTodo = this.todoList.find((todo) => todo.id === updatedTodo.id);
  //   if (!foundTodo) {
  //     throw new Error('todo not found');
  //   }
  //   Object.assign(foundTodo, updatedTodo);

  //   return foundTodo;
  // }
}
