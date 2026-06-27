import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {

  // shob course return korbe
  getAllCourses(): string {
    return 'Get All Courses';
  }

  // id diye single course
  getCourseById(id: string): string {
    return `Get Course with ID: ${id}`;
  }

  // notun course create
  createCourse(createCourseDto: CreateCourseDto): string {
    return `Course Created Successfully
Name: ${createCourseDto.courseName}
Teacher: ${createCourseDto.teacherName}
Credit: ${createCourseDto.credit}`;
  }

  // full update
  updateCourse(
    id: string,
    updateCourseDto: UpdateCourseDto,
  ): string {
    return `Course ${id} Updated Successfully
Name: ${updateCourseDto.courseName}
Teacher: ${updateCourseDto.teacherName}
Credit: ${updateCourseDto.credit}`;
  }

  // partial update
  patchCourse(
    id: string,
    updateCourseDto: UpdateCourseDto,
  ): string {
    return `Course ${id} Patched Successfully
Name: ${updateCourseDto.courseName}
Teacher: ${updateCourseDto.teacherName}
Credit: ${updateCourseDto.credit}`;
  }

  // delete
  deleteCourse(id: string): string {
    return `Course ${id} Deleted Successfully`;
  }
}