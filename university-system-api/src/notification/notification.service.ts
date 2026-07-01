import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {

    // EnrollmentService inject hocche (Circular Dependency)
    constructor(
        @Inject(forwardRef(() => EnrollmentService))
        private readonly enrollmentService: EnrollmentService,
    ) {}

    // Student ke notification pathabe
    sendNotification(studentName: string, message: string) {
        return {
            student: studentName,
            message,
        };
    }

    // Enrollment check kore notification dibe
    checkEnrollmentAndNotify(studentName: string, courseId: string) {

        // EnrollmentService theke data nicchi
        const enrollments = this.enrollmentService.getEnrollments();

        return {
            student: studentName,
            courseId,
            enrollments,
            notification: 'Notification Sent',
        };
    }
}