import { Pipe, PipeTransform } from '@angular/core';
import { categories } from 'src/app/data/categories';

@Pipe({
  name: 'categorynamebyid'
})
export class CategorynamebyidPipe implements PipeTransform {

  transform(category_id: number): string {
    let category = categories.filter(function (el) { return (el.id === category_id )});
    return category[0].value;
  }

}
