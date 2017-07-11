import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(todos: any, isDone: boolean): any {

    if (isDone === undefined) {
      return todos;
    } else if (isDone == true) {
      return todos.filter((a) => {
        if (a.status === true){
          return a;
        }
      })      
    } else {
      return todos.filter((a) => {
        if (a.status === false) {
          return a;
        }
      })
    }
  }

  

}
