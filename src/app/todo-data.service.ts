import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Store } from '@ngrx/store';
import { todoReducers } from './redux/reducer';

@Injectable()
export class TodoDataService {
  public lastId = 0;

  public totalTodoList: Todo[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _store: Store<any>) {

    _store.select('todoReducers').subscribe(d => {
      // console.log(d);
      this.totalTodoList = d;
    });

  }

  // NGRX's-Property
  public addTodo(todo: Todo): void {
    this._store.dispatch({

      type: 'ADD_TODO',
      payload: {
        id: ++this.lastId,
        title: todo.title,
        complete: todo.complete
      }
    });
  }

  // Local's - Property

  // Simulate POST /todos
  // public addTodo(todo: Todo): TodoDataService {
  //   if (!todo.id) {
  //     todo.id = ++this.lastId;
  //   }
  //   this.todos.push(todo);
  //   return this;
  // }

  // Simulate DELETE /todos/:id
  // public deleteTodoById(id: number): TodoDataService {
  //   this.todos = this.todos.filter(todo => todo.id !== id);
  //   return this;
  // }


  // NGRX's-Property
  public deleteTodoById(todoId: number): void {
    this._store.dispatch({
      type: 'REMOVE_TODO',
      payload: { id: todoId }
    });
  }


  // Local's Property

  // public toggleTodoComplete(todo: Todo) {
  //   let updatedTodo = this._updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

  // NGRX's-Property
  public toggleTodoComplete(todoId: number): void {
    this._store.dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: { id: todoId }
    });
  }

  public getCompleteTodos(): Todo[] {
    return this.totalTodoList.filter(todo => todo.complete === true);
  }

  public getIncompleteTodos(): Todo[] {
    return this.totalTodoList.filter(todo => todo.complete === false);
  }



  // Local's - Property

  // Simulate PUT /todos/:id
  // private _updateTodoById(id: number, values: Object = {}): Todo {
  //   let todo = this._getTodoById(id);
  //   if (!todo) {
  //     return null;
  //   }
  //   Object.assign(todo, values);
  //   return todo;
  // }

  // // Simulate GET /todos/:id
  // private _getTodoById(id: number): Todo {
  //   return this.todos.filter(todo => todo.id === id).pop();
  // }


}
