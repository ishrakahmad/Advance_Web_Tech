import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService],

  // Onno module jeno CourseService use korte pare
  exports: [CourseService],
})
export class CourseModule {}