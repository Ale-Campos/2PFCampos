import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/data/Courses';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
course: Course | undefined;

constructor(
  private activatedRoute: ActivatedRoute,
  private courseService: CoursesService
) {
  this.course = this.courseService.getCourse(this.activatedRoute.snapshot.params['id']);
}
}
