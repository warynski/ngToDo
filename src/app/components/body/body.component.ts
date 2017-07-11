import { Component, OnInit } from '@angular/core';
import { ToDoInterface } from '../../models/todo-interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  todos: ToDoInterface[];
  inputText: string;
  term: string;
  isDone: boolean;
  option: boolean;
  editInput: string;
  editDone: boolean;  

  constructor() {
    this.todos = [
      {
        text: 'wash dishes',
        status: false,
        edit: false
      },
       {
        text: 'learn angular',
        status: true,
        edit: false
      },
       {
        text: 'play with kids',
        status: false,
        edit: false
      },
            {
        text: 'go shopping',
        status: false,
        edit: false
      },
       {
        text: 'clean up basement',
        status: true,
        edit: false
      },
       {
        text: 'watch movie',
        status: false,
        edit: false
      },
      {
        text: 'go on holiday',
        status: false,
        edit: false
      }
    ]
  }

  ngOnInit() {
  }

  addToDo(): void {
    this.todos.push({
      text: this.inputText,
      status: this.option,
      edit: false
    })
    this.inputText = '';
    this.option = false;
  }

  toggleTodo(todo): void {
    if (this.option) {
      this.option = false;
    } else {
      this.option = true;
    }
  }

  onDelete(todo): void {
    for (let i = 0; i < this.todos.length; i++) {
      if ( this.todos[i].text == todo.text ) {
        this.todos.splice(i,1);
      }
    }    
  }

  onEdit(todo): void {
    todo.edit = true;
    this.editInput = todo.text;
    todo.text = '';    
  }

  statusUpdate(todo): void {
    if(todo.status) {
      todo.status = false;
    } else {
      todo.status = true;
    }
  }

  statusSave(todo): void {
    todo.text = this.editInput;
    this.editInput = '';
    todo.edit=false;
  }

  displayCat(a: number): void {
    if (a == 1) {
      this.isDone = undefined;
    } else if (a == 2) {
      this.isDone = true;
    } else {
      this.isDone = false;
    }
  }

}
