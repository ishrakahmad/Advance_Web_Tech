import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {

    // NotificationService inject hocche
    constructor(
        private readonly notificationService: NotificationService,
    ) {}

    // Student ke notification pathabe
    @Post('send')
    sendNotification(
        @Body('studentName') studentName: string,
        @Body('message') message: string,
    ) {
        return this.notificationService.sendNotification(
            studentName,
            message,
        );
    }

    // Enrollment check kore notification dibe
    @Post('check')
    checkEnrollmentAndNotify(
        @Body('studentName') studentName: string,
        @Body('courseId') courseId: string,
    ) {
        return this.notificationService.checkEnrollmentAndNotify(
            studentName,
            courseId,
        );
    }
}