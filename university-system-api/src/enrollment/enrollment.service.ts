import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class EnrollmentService {

    constructor(

        // CourseService inject hocche
        private readonly courseService: CourseService,

        // NotificationService inject hocche (Circular Dependency)
        @Inject(forwardRef(() => NotificationService))
        private readonly notificationService: NotificationService,

    ) {}

    // Student enroll korbe
    enrollStudent(studentName: string, courseId: string) {

        const course = this.courseService.getCourseById(courseId);

        // Enrollment er por notification pathacchi
        const notification = this.notificationService.sendNotification(
            studentName,
            'Welcome!',
        );

        return {
            message: 'Student enrolled successfully',
            student: studentName,
            course,
            notification,
        };
    }

    // Shob enrollment dekhabe
    getEnrollments() {
        return {
            message: 'All enrollments fetched',
            data: [],
        };
    }
}