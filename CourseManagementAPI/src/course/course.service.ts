import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

  getAllCourses(): string {
    return 'Get All Courses';
  }

  getCourseById(id: string): string {
    return `Get Course with ID: ${id}`;
  }

  createCourse(): string {
    return 'Course Created Successfully';
  }

  updateCourse(id: string): string {
    return `Course ${id} Updated Successfully`;
  }

  patchCourse(id: string): string {
    return `Course ${id} Patched Successfully`;
  }

  deleteCourse(id: string): string {
    return `Course ${id} Deleted Successfully`;
  }

}