import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateCourseDto {
  // course name empty hote parbe na
  @IsNotEmpty()
  @IsString()
  courseName: string;

  // teacher name
  @IsNotEmpty()
  @IsString()
  teacherName: string;

  // credit 1-5 er moddhe hote hobe
  @IsInt()
  @Min(1)
  @Max(5)
  credit: number;
}