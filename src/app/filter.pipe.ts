import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(todos: any, term: string): any {
    
    if (term === undefined) {
      return todos;
    } else {
      return todos.filter((a) => {
        return a.text.toLowerCase().includes(term.toLowerCase());
      })      
    }
  }

}
