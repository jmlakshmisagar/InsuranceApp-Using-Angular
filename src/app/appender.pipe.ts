import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appender'
})
export class AppenderPipe implements PipeTransform {

  transform(a:Date ):string {
    return a.getFullYear().toString();
  }

}
