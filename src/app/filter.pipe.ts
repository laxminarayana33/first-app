import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propertyName:string): any[] {
    const filterValue:any = [];
    if (!value || filterString === '' || propertyName === '') {
      return value;
    } 
    value.forEach((obj:any)=>{
      if(obj[propertyName].trim().toLowerCase().includes(filterString.toLowerCase())){
        filterValue.push(obj);
      }
    });
    return filterValue;
  }
}
