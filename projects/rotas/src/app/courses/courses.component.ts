import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: any[] | undefined;

  constructor(private courseService: CoursesService){}

  ngOnInit(){
    this.courses = this.courseService.getCourses();
  }

}
