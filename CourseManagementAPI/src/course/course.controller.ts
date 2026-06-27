import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

// course related shob route ekhane
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // shob course dekhabe
  @Get()
  getAllCourses(): string {
    return this.courseService.getAllCourses();
  }

  // id diye single course
  @Get(':id')
  getCourseById(@Param('id') id: string): string {
    return this.courseService.getCourseById(id);
  }

  // notun course create
  @Post()
  createCourse(@Body() createCourseDto: CreateCourseDto): string {
    return this.courseService.createCourse(createCourseDto);
  }

  // puro course update
  @Put(':id')
  updateCourse(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ): string {
    return this.courseService.updateCourse(id, updateCourseDto);
  }

  // partial update
  @Patch(':id')
  patchCourse(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ): string {
    return this.courseService.patchCourse(id, updateCourseDto);
  }

  // course delete
  @Delete(':id')
  deleteCourse(@Param('id') id: string): string {
    return this.courseService.deleteCourse(id);
  }
}