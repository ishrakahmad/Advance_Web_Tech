import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {

    // Constructor diye CourseService inject hocche 
    constructor(private readonly courseService: CourseService) {}

    // Shob course dekhabe
    @Get()
    getAllCourses() {
        return this.courseService.getAllCourses();
    }

    // ID diye ekta course dekhabe
    @Get(':id')
    getCourseById(@Param('id') id: string) {
        return this.courseService.getCourseById(id);
    }

    // Notun course create korbe
    @Post()
    createCourse(
        @Body('name') name: string,
        @Body('code') code: string,
    ) {
        return this.courseService.createCourse(name, code);
    }
}