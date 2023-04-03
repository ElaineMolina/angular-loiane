import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
getCourses(){
  return[
    { id: 1, name: 'Angular 2'},
    { id: 2, name: 'Java'}
  ];
}

  constructor() { }
}
