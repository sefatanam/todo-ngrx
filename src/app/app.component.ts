// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'todo-ngrx';
// }
import { Todo } from './todo';
import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
 
  constructor(private todoDataService: TodoDataService) {}


  // Now NGRX - Property
  public addTodo(): void {

    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    // this.newTodo = new Todo();
  }

  // Handle this by NGRX

  // public toggleTodoComplete(todo): void {
  //   this.todoDataService.toggleTodoComplete(todo);
  // }

  // public removeTodo(todo): void {
  //   this.todoDataService.deleteTodoById(todo.id);
  // }

  public toggleTodoComplete({ id }): void {
    this.todoDataService.toggleTodoComplete(id);
  }
  public removeTodo({ id }): void {
    this.todoDataService.deleteTodoById(id);
  }

  public allTodos(): number {
    return this.incompleteTodos.length + this.completeTodos.length;
  }
  public get incompleteTodos(): Array<Todo> {
    return this.todoDataService.getIncompleteTodos();
  }

  public get completeTodos(): Array<Todo> {
    return this.todoDataService.getCompleteTodos();
  }


}
