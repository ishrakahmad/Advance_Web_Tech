import { Module, forwardRef } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { EnrollmentModule } from '../enrollment/enrollment.module';

@Module({
  // Circular dependency er jonno forwardRef use hocche
  imports: [
    forwardRef(() => EnrollmentModule),
  ],

  controllers: [NotificationController],

  providers: [NotificationService],

  // Onno module jeno NotificationService use korte pare
  exports: [NotificationService],
})
export class NotificationModule {}