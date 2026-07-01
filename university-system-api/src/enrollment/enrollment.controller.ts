import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {

    // EnrollmentService inject hocche
    constructor(
        private readonly enrollmentService: EnrollmentService,
    ) {}

    // Shob enrollment dekhabe
    @Get()
    getEnrollments() {
        return this.enrollmentService.getEnrollments();
    }

    // Student enroll korbe
    @Post()
    enrollStudent(
        @Body('studentName') studentName: string,
        @Body('courseId') courseId: string,
    ) 
    
    {
        return this.enrollmentService.enrollStudent(studentName, courseId);
    }
}