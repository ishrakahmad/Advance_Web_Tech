import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

// update er somoy shob field optional hoye jabe
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}