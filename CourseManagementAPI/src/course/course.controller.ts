import {
    Controller,
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Param,
  } from '@nestjs/common';
  import { CourseService } from './course.service';
  
  // Course related sob route ekhane thakbe
  @Controller('course')
  export class CourseController {
  
    // Service use kortesi
    constructor(private readonly courseService: CourseService) {}
  
    // Sob course dekhabe
    @Get()
    getAllCourses(): string {
      return this.courseService.getAllCourses();
    }
  
    // URL theke ID niye specific course dekhabe
    @Get(':id')
    getCourseById(@Param('id') id: string): string {
      return this.courseService.getCourseById(id);
    }
  
    // Notun course create korbe
    @Post()
    createCourse(): string {
      return this.courseService.createCourse();
    }
  
    // Puro course update korbe
    @Put(':id')
    updateCourse(@Param('id') id: string): string {
      return this.courseService.updateCourse(id);
    }
  
    // Course er kichu information update korbe
    @Patch(':id')
    patchCourse(@Param('id') id: string): string {
      return this.courseService.patchCourse(id);
    }
  
    // ID diye course delete korbe
    @Delete(':id')
    deleteCourse(@Param('id') id: string): string {
      return this.courseService.deleteCourse(id);
    }
  }